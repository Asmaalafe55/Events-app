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
    { link: '/categories', title: 'Categories' },
    { link: '/sign-in', title: 'Sign In' },
    { link: '/sign-up', title: 'Sign Up' },
  ];

  return (
    <header>
      <nav className={styles.app__navbar}>
        <Link href="/" className={styles.app__navbar_logo}>
          <Image
            alt="logo"
            src={logoImages.white_logo}
            width={40}
            height={20}
          />
          <div>EventsApp</div>
        </Link>

        <div className={styles.app__navbar_links}>
          <Link href="/aboutUs" onClick={() => setToggle(false)}>
            About Us
          </Link>

          <Link href="/categories" onClick={() => setToggle(false)}>
            Categories
          </Link>

          <div className={styles.dropdown}>
            <div>Sign</div>
            <div className={styles.dropdown_content}>
              <Link href="/sign-in" onClick={() => setToggle(false)}>
                Sign in
              </Link>
              <Link href="/sign-up" onClick={() => setToggle(false)}>
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.app__navbar_menu}>
          <FiMenu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.aside
              className={styles.app__navbar_menu_container}
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.9, duration: 0.85, ease: 'easeOut' },
              }}
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
            </motion.aside>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
