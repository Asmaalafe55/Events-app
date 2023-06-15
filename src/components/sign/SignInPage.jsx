import React, { useRef, useState } from 'react';
import Image from 'next/image';

import styles from './SignInPage.module.scss';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passValue = password.current.value;

    try {
      const response = await axios.post('/sign-in', {
        email: emailValue,
        password: passValue,
      });

      setEmail('');
      setPassword('');
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <div className={styles.sign_in_page}>
      <div>
        <p>SIGN IN</p>
        <form className={styles.signin} onSubmit={onSubmit}>
          <input
            ref={() => setEmail()}
            className={styles.signin_input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <input
            ref={() => setPassword()}
            className={styles.signin_input}
            type="email"
            id="email"
            name="email"
            placeholder="password"
          />
          <button className={styles.submit_btn} type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
