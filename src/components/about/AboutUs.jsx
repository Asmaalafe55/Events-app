import React from 'react';
import Image from 'next/image';
import { imagesArray } from '../../images/images';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.left_right}>
      <div className={styles.about_left_side}>
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
      <div className={styles.about_right_side}>
        <Image src={imagesArray.about} alt="about" width={100} height={100} />
      </div>
    </div>
  );
};

export default AboutUs;
