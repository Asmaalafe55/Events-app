import React from 'react';
import styles from './Contact.module.scss';

import { HiPhone, HiMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <>
      <div id="contact" className={styles.app__contact}>
        {/* <div className={styles.left__right}> */}
        <div className={styles.contact_left_side}>
          <div>
            <div>
              <label>Full Name:</label>
              <input type="name" placeholder="Please enter your full name" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" placeholder="Please enter your email" />
            </div>
          </div>
          <div>
            <div>
              <label>Message:</label>
              <input
                className={styles.custom_input}
                type="message"
                placeholder="Please enter your message"
              />
            </div>
            <button>send</button>
          </div>
        </div>
        <div className={styles.contact_right_side}>
          <div>
            <HiPhone />
            <div>+01 555 99 0342</div>
          </div>
          <div>
            <HiMail />
            <div>info@events.com</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
