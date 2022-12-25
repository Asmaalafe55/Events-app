import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

import logoPic from '../../images/logo.png';

const Header = () => {
  return (
    <header>
      <nav className={styles.app__navbar}>
        <div className={styles.app__navbar_logo}>
          <Image alt="logo" src={logoPic} width={50} height={50} />
        </div>
        <ul className={styles.app__navbar_links}>
          <li className={(styles.app__flex, styles.p_text)}>
            <Link href="/">Home </Link>
          </li>
          <li className={(styles.app__flex, styles.p_text)}>
            <Link href="/aboutUs">About Us </Link>
          </li>
          <li className={(styles.app__flex, styles.p_text)}>
            <Link href="/events">Events</Link>
          </li>
        </ul>
        <p className=""> events around the world </p>
      </nav>
    </header>
  );
};

export default Header;
