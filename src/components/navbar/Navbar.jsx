import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import images from '../../images/images';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <nav className={styles.app__navbar}>
        <div className={styles.app__navbar_logo}>
          <Image alt="logo" src={images.logoPic} width={50} height={50} />
          <div>AppName</div>
        </div>
        <ul className={styles.app__navbar_links}>
          {/* <li className={(styles.app__flex, styles.p_text)}>
            <Link href="/">Home </Link>
          </li> */}
          <li className={(styles.app__flex, styles.p_text)}>
            <Link href="/aboutUs">About Us </Link>
          </li>
          <li className={(styles.app__flex, styles.p_text)}>
            <Link href="/events">Events</Link>
          </li>
          <li className={(styles.app__flex, styles.p_text)}>
            <Link href="">Contact</Link>
          </li>
        </ul>

        <div className={styles.app__navbar_menu}>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              {/* i have problem here */}
              <HiX onClick={() => setToggle(false)} />
              <ul className={styles.app__navbar_links}>
                {['home', 'about', 'events'].map((item) => (
                  <li key={item}>
                    <a href={`/${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
