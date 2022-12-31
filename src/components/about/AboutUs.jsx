import React from 'react';
import styles from './AboutUs.module.scss';

import { Banner } from '../header/Banner';

const AboutUs = () => {
  return (
    <div className={styles.left__right}>
      <div className={styles.app__about}>
        <h1>About Us</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className={styles.about__right__side}>
        <Banner start={0} end={7} />
        <Banner start={7} end={14} reverse />
        <Banner start={14} end={21} />
      </div>
    </div>
  );
};

export default AboutUs;
