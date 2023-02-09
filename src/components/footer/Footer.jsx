import React, { useRef, useState } from 'react';
import axios from '../../../utils/axios';
import Image from 'next/image';
import Link from 'next/link';

import { HiPhone, HiMail } from 'react-icons/hi';
import styles from './Footer.module.scss';
import { logoImages } from '../../images/images';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
  const inputEmail = useRef();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;

    try {
      const response = await axios.post('/emailNewsletter', {
        email: emailValue,
      });

      setMessage(response.data.message);
      inputEmail.current.value = '';
    } catch (e) {
      console.log('ERROR', e);
    }
  };
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.links}>
          <a href="">About us</a>
          <a href="">Pricing</a>
          <a href="">Business</a>
          <a href="">Users</a>
          <a href="">Jobs</a>
          <a href="">FAQ</a>
          <a href="">Legal</a>
        </div>
        <div className={styles.middle}>
          <div className={styles.contact_info}>
            <div>
              <HiPhone />
              <div>+01 555 99 0342</div>
            </div>
            <div>
              <HiMail />
              <div>info@events.com</div>
            </div>
          </div>

          <div className={styles.social_media}>
            <a href="">
              <AiFillFacebook />
            </a>
            <a href="">
              <AiFillInstagram />
            </a>
            <a href="">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>

        {/* <div className={styles.newsletter}>
          <h2>Subscribe now to our newsletter</h2> */}

        <form className={styles.subscribe} onSubmit={onSubmit}>
          <p>SUBSCRIBE</p>
          <input
            ref={inputEmail}
            className={styles.subscribe_input}
            type="email"
            id="email"
            name="email"
            placeholder="Your e-mail"
          />
          <button className={styles.submit_btn} type="submit">
            SUBMIT
          </button>
        </form>
        {/* </div> */}

        {/* <div class="subscribe">
          <p>SUBSCRIBE</p>
          <input
            type="email"
            name="email"
            className="subscribe-input"
            placeholder="Your e-mail"
          />
          <br />
          <div class="submit-btn">SUBMIT</div>
        </div> */}
      </div>

      <div className={styles.buttom_footer}>
        <Link href="/" className={styles.app__footer_logo}>
          <Image
            alt="logo"
            src={logoImages.white_logo}
            width={50}
            height={30}
          />
          <div>EventsApp</div>
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
