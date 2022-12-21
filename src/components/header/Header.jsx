import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className="app__navbar-logo">
        <Image
          alt="logo"
          src={'/images/logo_black.png'}
          width={50}
          height={50}
        />
      </div>
      <nav className="app__navbar">
        <ul className="app__navbar-links">
          <li className="app__flex p-text">
            <Link href="/">Home </Link>
          </li>
          <li className="app__flex p-text">
            <Link href="/aboutUs">About Us </Link>
          </li>
          <li className="app__flex p-text">
            <Link href="/events">Events</Link>
          </li>
        </ul>
        <p className=""> events around the world </p>
      </nav>
    </header>
  );
};

export default Header;
