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

      <div className={styles.app__home}>
        <div className={styles.title}>Top Events</div>
        <div className={styles.list}>
          {data.map((event) => (
            <Link key={event.id} href={`/events/${event.category}`}>
              {console.log(event.id)}
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
