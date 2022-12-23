import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

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
        <div>
          <div>social media</div>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
        </div>
      </div>
      <div className={styles.buttom_footer}>
        <div>
          <Image width={50} height={50} alt="logo" src="" />
          <div className="p_text">App Name</div>
        </div>
        <div>
          <p className="p_text">@2022 ASMAA</p>
          <p className="p_text">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
