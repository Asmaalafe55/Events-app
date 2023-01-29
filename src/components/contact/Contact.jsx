import React, { useRef, useState } from 'react';
import styles from './Contact.module.scss';
import axios from '../../../utils/axios';

import { HiPhone, HiMail } from 'react-icons/hi';

const Contact = () => {
  const inputEmail = useRef();
  const inputName = useRef();
  const inputMessage = useRef();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      message: inputMessage.current.value,
    };

    try {
      const response = await axios.post('/contact', data);

      inputName.current.value = '';
      inputEmail.current.value = '';
      inputMessage.current.value = '';
      setMessage(response.data.message);
      alert('Your message has been sent!');
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <>
      <div className={styles.app__contact}>
        <div id="contact" className={styles.contact__title}>
          Contact Us
        </div>
        <div className={styles.contact_left_side}>
          <form onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input
              ref={inputName}
              type="text"
              id="name"
              placeholder="Please enter your full name"
            />

            <label>Email:</label>
            <input
              ref={inputEmail}
              type="email"
              id="email"
              placeholder="Please enter your email"
            />

            <label>Message:</label>
            <input
              className={styles.custom_input}
              ref={inputMessage}
              type="text"
              id="message"
              placeholder="Please enter your message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
        {/* <div className={styles.contact_right_side}>
          <div>
            <HiPhone />
            <div>+01 555 99 0342</div>
          </div>
          <div>
            <HiMail />
            <div>info@events.com</div>
          </div>
        </div> */}
        {/*
    .contact_right_side {
    background-color: #ffffff;
    color: var(--black-color);
    padding: 4rem 2rem;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      font-size: 28px;
      padding: 0.5rem 0;

      justify-content: space-evenly;
      align-items: center;

      svg {
        width: 40;
      }
    }
  }  */}
      </div>
    </>
  );
};

export default Contact;
