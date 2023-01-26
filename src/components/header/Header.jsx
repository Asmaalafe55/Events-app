import React, { useRef, useState } from 'react';
import axios from '../../../utils/axios';
import styles from './Header.module.scss';
import { Banner } from './Banner';

const Header = (props) => {
  const inputEmail = useRef();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;

    try {
      const response = await axios.post('/emailNewsletter', {
        email: emailValue,
      });

      setMessage(response.data.message);
      inputEmail.current.value = '';
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <>
      <div className={(styles.app__header, styles.app__flex)}>
        <div className={styles.left__right}>
          <div className={styles.header__left__side}>
            <Banner start={0} end={7} />
            <Banner start={7} end={14} reverse />
            <Banner start={14} end={21} />
          </div>
          <div className={styles.header__right__side}>
            <div>
              <h2>Subscribe now to our newsletter</h2>
              <div>
                <form onSubmit={onSubmit}>
                  <label>Email:</label>
                  <input
                    ref={inputEmail}
                    type="email"
                    id="email"
                    placeholder="Please enter your email"
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
