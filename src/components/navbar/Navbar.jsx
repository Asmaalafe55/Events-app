import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import { HiX } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { logoImages } from '../../images/images';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const links = [
    { link: '/', title: 'Home' },
    { link: '/aboutUs', title: 'About Us' },
    { link: '/events', title: 'Events' },
    { link: '#contact', title: 'Contact' },
  ];

  return (
    <header>
      <nav className={styles.app__navbar}>
        <Link href="/" className={styles.app__navbar_logo}>
          <Image alt="logo" src={logoImages.logoPic} width={50} height={50} />
          <div>Events App</div>
        </Link>
        <ul className={styles.app__navbar_links}>
          {links.splice(1, 4).map((item) => (
            <li key={item.title}>
              <Link href={item.link} onClick={() => setToggle(false)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.app__navbar_menu}>
          <FiMenu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className={styles.app__navbar_links}>
                {links.map((item) => (
                  <li key={item.title}>
                    <Link href={item.link} onClick={() => setToggle(false)}>
                      {item.title}
                    </Link>
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
