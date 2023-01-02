import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import SingleEvent from '../../../src/components/events/SingleEvent';

const Event = ({ data }) => {
  const [message, setMessage] = useState('');
  const inputEmail = useRef();
  const router = useRouter();

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.event;
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please intreduce a correct email address');
    }
    try {
      const response = await fetch('/api/emailRegisteration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      // POST fetch request
      // to send: body, emailValue, eventId
    } catch (e) {
      console.log('ERROR', e);
    }
  };
  return (
    <SingleEvent
      data={data}
      func={onSubmitFunction}
      message={message}
      inputEmail={inputEmail}
    />
  );
};

export default Event;

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json');
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        category: path.city,
        event: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.event;
  const { allEvents } = await import('/data/data.json');

  const eventData = allEvents.find((e) => e.id === id);

  return {
    props: { data: eventData },
  };
}
