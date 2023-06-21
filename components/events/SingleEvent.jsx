import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import axios from '../../utils/axios';

import styles from './SingleEvent.module.scss';

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    try {
      const response = await axios.post('/addEmail', {
        email: emailValue,
        eventId,
      });

      setMessage(response.data.message);
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
        <Image src={data.image} width={1000} height={500} alt={data.title} />
      </div>

      <div className={styles.single_event_form}>
        <label>Get Registered for this event!</label>
        <form onSubmit={onSubmit}>
          <input
            className={styles.single_event_input}
            ref={inputEmail}
            type="email"
            id="email"
            placeholder="Your email"
          />
          <button type="submit">Submit</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SingleEvent;
