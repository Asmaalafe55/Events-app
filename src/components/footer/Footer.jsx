import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { logoImages } from '../../images/images';
import styles from './Footer.module.scss';

// import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div>
          <div>information</div>
          <a href="">Pricing</a>
          <a href="">About us</a>
          <a href="">Business</a>
          <a href="">Jobs</a>
          <a href="">Add your event</a>
        </div>
        <div>
          <div>legal</div>
          <a href="">Terms and conditions</a>
          <a href="">License agreement</a>
          <a href="">Privacy policy</a>
          <a href="">Copyright information</a>
          <a href="">Cookies policy</a>
          <a href="">Cookies settings</a>
        </div>
        <div>
          <div>support</div>
          <a href="">FAQ</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div className={styles.buttom_footer}>
        <Link href="/" className={styles.app__footer_logo}>
          <Image alt="logo" src={logoImages.logoPic} width={50} height={50} />
          <div>Events App</div>
        </Link>
        <div className={styles.copyright}>
          <p>created by Asmaa</p>
          <p>all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
