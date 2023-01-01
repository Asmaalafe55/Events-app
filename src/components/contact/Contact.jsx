import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <>
      <div id="contact" className={styles.app__contact}>
        {/* <div className={styles.left__right}> */}
        <div className={styles.contact_left_side}>left side</div>
        <div className={styles.contact_right_side}>right side</div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
