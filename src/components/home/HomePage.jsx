import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import Header from '../header/Header';
import Contact from '../contact/Contact';

import styles from './Home.module.scss';

const HomePage = ({ data }) => {
  const [subEmail, setSubEmail] = useState('');
  return (
    <main className={styles.home}>
      <Header id="home" subEmail={subEmail} setSubEmail={setSubEmail} />
      <div className={styles.container}>
        <div className={styles.app__home}>
          <div className={styles.title}>Top Events</div>
          {data.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
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
          <div className={styles.contact__title}>Contact Us</div>
        </div>
        <div className={styles.app__home2}></div>
      </div>
      <Contact />
    </main>
  );
};

export default HomePage;
