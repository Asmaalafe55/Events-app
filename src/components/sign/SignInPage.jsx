import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { imagesArray } from '../../images/images';
import styles from './SignInPage.module.scss';

const SignInPage = () => {
  return (
    <div className={styles.sign_in_page}>
      <div className={styles.left_sign_in}>sign in left side</div>
      <div className={styles.right_sign_in}>
        <Image src={imagesArray.signin} width={500} height={500} />
      </div>
    </div>
  );
};

export default SignInPage;
