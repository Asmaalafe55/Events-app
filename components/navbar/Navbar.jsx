import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import { HiX } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { logoImages } from '../../public/images/images';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const isLoggedIn =
    typeof window !== 'undefined' && localStorage.getItem('accessToken');

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');

    // router.push('/');
  };

  const links = [
    { link: '/', title: 'Home' },
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
          <Link href="/aboutUs" onClick={() => setToggle(false)}>
            About Us
          </Link>

          <Link href="/categories" onClick={() => setToggle(false)}>
            Categories
          </Link>

          {isLoggedIn ? (
            <Link href="/" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <div className={styles.dropdown}>
              <div>Sign</div>
              <div className={styles.dropdown_content}>
                <Link href="/auth/sign-in" onClick={() => setToggle(false)}>
                  Sign in
                </Link>
                <Link href="/auth/sign-up" onClick={() => setToggle(false)}>
                  Sign up
                </Link>
              </div>
            </div>
          )}
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
