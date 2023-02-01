import React from 'react';
import styles from './Header.module.scss';
import { Banner } from './Banner';

const Header = () => {
  return (
    <>
      <div className={styles.app__header}>
        <div className={styles.left__right}>
          <div className={styles.header__left__side}>
            <Banner start={0} end={7} />
            <Banner start={7} end={14} reverse />
            <Banner start={14} end={21} />
          </div>

          <div className={styles.header__right__side}>
            <div>
              <div>
                Discover & Register for Exciting Events Worldwide with Ease
              </div>
              <p>Join the Celebration of Life's Most Memorable Moments</p>
            </div>
            <button className={styles.header_button}>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
