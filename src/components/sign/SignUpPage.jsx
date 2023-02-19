import React from 'react';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  return (
    <div className={styles.sign_up_page}>
      <div className={styles.left_sign_up}>sign up left side</div>
      <div className={styles.right_sign_up}>sign up right side</div>
    </div>
  );
};

export default SignUpPage;
