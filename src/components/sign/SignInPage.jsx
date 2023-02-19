import React from 'react';
import styles from './SignInPage.module.scss';

const SignInPage = () => {
  return (
    <div className={styles.sign_in_page}>
      <div className={styles.left_sign_in}>left side</div>
      <div className={styles.right_sign_in}>right side</div>
    </div>
  );
};

export default SignInPage;
