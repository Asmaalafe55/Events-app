import React, { useRef, useState } from 'react';
import styles from './Contact.module.scss';
import axios from '../../../utils/axios';

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
      // alert('Your message has been sent!');
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <>
      <div id="contact" className={styles.app__contact}>
        <div className={styles.contact__title}>Contact Us</div>
        <div className={styles.contact_left_side}>
          <form onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input
              className={styles.contact_input}
              ref={inputName}
              type="text"
              id="name"
              placeholder="Please enter your full name"
            />

            <label>Email:</label>
            <input
              className={styles.contact_input}
              ref={inputEmail}
              type="email"
              id="email"
              placeholder="Please enter your email"
            />

            <label>Message:</label>
            <textarea
              className={styles.contact_custom_input}
              ref={inputMessage}
              type="text"
              id="message"
              placeholder="Please enter your message"
            />
            <button className={styles.contact_button} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
