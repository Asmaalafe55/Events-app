import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './EventsPage.module.scss';

const eventsPage = ({ data }) => {
  return (
    <div className={styles.events}>
      <label>Events</label>
      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <Image
              width={200}
              height={200}
              alt={event.title}
              src={event.image}
            />
            <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default eventsPage;
