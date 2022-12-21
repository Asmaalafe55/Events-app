import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Event = ({ data }) => {
  const [message, setMessage] = useState('');
  const inputEmail = useRef();
  const router = useRouter();
  console.log(router);

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
    <div>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <label>Get Registered for this event!</label>
      <form onSubmit={onSubmitFunction}>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here .."
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
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
