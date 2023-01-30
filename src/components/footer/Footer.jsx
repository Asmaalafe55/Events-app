import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiPhone, HiMail } from 'react-icons/hi';

import { logoImages } from '../../images/images';
import styles from './Footer.module.scss';

// import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div>
          <a href="">Pricing</a>
          <a href="">About us</a>
          <a href="">Business</a>
          <a href="">Jobs</a>
          <a href="">Add your event</a>
          <a href="">FAQ</a>
          <a href="">Legal</a>
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

      <div className={styles.buttom_footer}>
        <Link href="/" className={styles.app__footer_logo}>
          <Image
            alt="logo"
            src={logoImages.white_logo}
            width={50}
            height={30}
          />
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
