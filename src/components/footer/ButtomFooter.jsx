import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { logoImages } from '../../images/images';
import styles from './Footer.module.scss';

const ButtomFooter = () => {
  return (
    <div className={styles.buttom_footer}>
      <Link href="/" className={styles.app__footer_logo}>
        <Image alt="logo" src={logoImages.white_logo} width={50} height={30} />
        <div>EventsApp</div>
      </Link>
      <div className={styles.copyright}>
        <p>created by Asmaa</p>
        <p>all rights reserved</p>
      </div>
    </div>
  );
};

export default ButtomFooter;
