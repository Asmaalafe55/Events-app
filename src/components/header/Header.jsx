import React from 'react';
import styles from './Header.module.scss';
import { Banner } from './Banner';

const Header = () => {
  return (
    <>
      <div className={(styles.app__header, styles.app__flex)}>
        <div className={styles.left__right}>
          <div className={styles.header__left__side}>
            <Banner start={0} end={7} />
            <Banner start={7} end={14} reverse />
            <Banner start={14} end={21} />
          </div>

          <div className={styles.header__right__side}>
            <div>Hello 😁</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
