import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_cards}>
        <div className={styles.footer_card}>
          <div className={styles.footer_card_head}>INFORMATION</div>
          <a href="">Pricing</a>
          <a href="">About us</a>
          <a href="">Business</a>
          <a href="">Jobs</a>
          <a href="">Add your event</a>
        </div>
        <div>
          <div>LEGAL</div>
          <a href="">Terms and conditions</a>
          <a href="">License agreement</a>
          <a href="">Privacy policy</a>
          <a href="">Copyright information</a>
          <a href="">Cookies policy</a>
          <a href="">Cookies settings</a>
        </div>
        <div>
          <div>SUPPORT</div>
          <a href="">FAQ</a>
          <a href="">Contact</a>
        </div>
        <div>
          <div>SOCIAL MEDIA</div>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
        </div>
      </div>
      <div className="copyright">
        <p className="p_text">@2022 ASMAA</p>
        <p className="p_text">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
