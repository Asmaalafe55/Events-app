import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import styles from './SingleEvent.module.scss';

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please introduce a correct email address');
    }

    try {
      const response = await fetch('/api/emailRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <div className={styles.single_event_container}>
      <div className={styles.single_event}>
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>

        <div>
          <div>
            <label>Get Registered for this event!</label>
            <form onSubmit={onSubmit}>
              <input
                ref={inputEmail}
                type="email"
                id="email"
                placeholder="Please insert your email here ..."
              />
              <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
          </div>
        </div>
      </div>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
    </div>
  );
};

export default SingleEvent;
