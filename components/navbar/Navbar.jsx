import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { HiX } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { logoImages } from '../../public/images/images';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const router = useRouter();

  useEffect(() => {
    // Check if the access token is in localStorage
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken); // Update login status based on the token
  }, []); // Run this effect only once when the component mounts

  const handleLogout = () => {
    // Handle logout logic here: remove token from localStorage, etc.
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false); // Update login status after logout

    console.log('Current route:', router.pathname);
    // Redirect to home or any other desired page
    if (router.pathname === '/profile') {
      console.log('Redirecting to home');
      router.push('/');
    }
  };

  const links = isLoggedIn
    ? [
        { link: '/aboutUs', title: 'About Us' },
        { link: '/categories', title: 'Categories' },
        { link: '/', title: 'Logout', onClick: handleLogout },
      ]
    : [
        { link: '/aboutUs', title: 'About Us' },
        { link: '/categories', title: 'Categories' },
        { link: '/auth/sign-in', title: 'Sign In' },
        { link: '/auth/sign-up', title: 'Sign Up' },
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
          {links.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              onClick={item.onClick ? item.onClick : () => setToggle(false)}
            >
              {item.title}
            </Link>
          ))}
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
