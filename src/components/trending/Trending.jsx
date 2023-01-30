import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Trending.module.scss';

const Trending = ({ data }) => {
  return (
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
  );
};

export default Trending;
