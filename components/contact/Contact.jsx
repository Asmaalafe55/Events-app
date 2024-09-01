import React, { useRef, useState } from 'react';
import styles from './Contact.module.scss';
import axios from '../../utils/axios';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

const Contact = () => {
  const inputEmail = useRef();
  const inputName = useRef();
  const inputMessage = useRef();
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('OK');

  const handleBackClick = () => {
    setMessage('');
  };

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
      setSuccess(response.statusText);
    } catch (e) {
      console.log('ERROR', e);
      setMessage('An error occurred while sending your message.');
      setSuccess('Faild');
    }
  };

  return (
    <>
      <div id="contact" className={styles.app__contact}>
        <div className={styles.contact__title}>Contact Us</div>
        <div className={styles.contact_left_side}>
          {message ? (
            <Result
              icon={success === 'OK' ? <SmileOutlined /> : <FrownOutlined />}
              title={message}
              extra={
                <Button onClick={handleBackClick} type="primary">
                  Back
                </Button>
              }
            />
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name:</label>
              <input
                className={styles.contact_input}
                ref={inputName}
                type="text"
                id="name"
                placeholder="Please enter your full name"
              />

              <label htmlFor="email">Email:</label>
              <input
                className={styles.contact_input}
                ref={inputEmail}
                type="email"
                id="email"
                placeholder="Please enter your email"
              />

              <label htmlFor="message">Message:</label>
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
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
