import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import Header from '../header/Header';
import Contact from '../contact/Contact';

import styles from './Home.module.scss';

const HomePage = ({ data }) => {
  const [search, setSearch] = useState('');
  return (
    <main className={styles.home}>
      <Header id="home" search={search} setSearch={setSearch} />

      <div className={styles.app__home}>
        <div>Top Events</div>
        {data.map((event) => (
          <h2 className={styles.top__events}>
            <Link key={event.id} href={`/events/${event.id}`}>
              <Image
                width={200}
                height={200}
                alt={event.title}
                src={event.image}
              />
              <h2>{event.title}</h2>
            </Link>
            <p>{event.description}</p>
          </h2>
        ))}
      </div>

      <Contact />
    </main>
  );
};

export default HomePage;
