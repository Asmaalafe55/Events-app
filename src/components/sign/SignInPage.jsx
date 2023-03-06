import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { imagesArray } from '../../images/images';
import styles from './SignInPage.module.scss';

const SignInPage = () => {
  const inputEmail = useRef();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;

    try {
      const response = await axios.post('/sign-in', {
        email: emailValue,
      });

      setMessage(response.data.message);
      inputEmail.current.value = '';
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <div className={styles.sign_in_page}>
      <div className={styles.left_sign_in}>
        <form className={styles.signin} onSubmit={onSubmit}>
          <p>SIGN IN</p>
          <input
            ref={inputEmail}
            className={styles.signin_input}
            type="email"
            id="email"
            name="email"
            placeholder="Your e-mail"
          />
          <button className={styles.submit_btn} type="submit">
            SUBMIT
          </button>
          <p>{message}</p>
        </form>
      </div>
      <div className={styles.right_sign_in}>
        <Image src={imagesArray.signin} width={500} height={500} />
      </div>
    </div>
  );
};

export default SignInPage;
