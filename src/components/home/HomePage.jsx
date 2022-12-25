import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import Header from '../header/Header';

import styles from './Home.module.scss';

const HomePage = ({ data }) => {
  const [search, setSearch] = useState('');
  return (
    <main id="home">
      <Header search={search} setSearch={setSearch} />
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`}>
          <Image width={200} height={200} alt={event.title} src={event.image} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
