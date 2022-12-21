import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <img />
        <Link href="/">Home </Link>
        <Link href="/aboutUs">About Us </Link>
        <Link href="/events">Events</Link>
      </nav>
    </header>
  );
};

export default Header;
