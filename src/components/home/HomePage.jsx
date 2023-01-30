import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../header/Header';
import Contact from '../contact/Contact';

import styles from './Home.module.scss';

const HomePage = ({ data }) => {
  return (
    <main className={styles.home}>
      <Header id="home" />

      <div className={styles.app_top}>
        <div className={styles.title}>Top Categories</div>
        <div className={styles.list}>
          {data.map((event) => (
            <Link key={event._id} href={`/events/${event.category}`}>
              <Image
                width={200}
                height={200}
                alt={event.title}
                src={event.image}
              />
              <div>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Contact />
    </main>
  );
};

export default HomePage;
