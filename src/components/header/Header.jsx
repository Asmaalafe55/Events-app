import React from 'react';
import styles from './Header.module.scss';
import { Banner } from './Banner';

const Header = (props) => {
  const { search, setSearch } = props;
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
            <div>
              <h2>Subscribe now to our newsletter</h2>
              <div>
                <div>
                  <label>Email:</label>
                  <input type="search" placeholder="Please enter your email" />
                </div>
                <button>subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
