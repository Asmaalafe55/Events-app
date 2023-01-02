import React from 'react';
import Image from 'next/image';

import styles from './SingleEvent.module.scss';

const SingleEvent = ({ data, func, message, inputEmail }) => {
  return (
    <div>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <label>Get Registered for this event!</label>
      <form onSubmit={func}>
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

export default SingleEvent;
