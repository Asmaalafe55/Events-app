import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './EventsPerCity.module.scss';

const EventsPerCity = ({ data }) => {
  return (
    <div className={styles.events_per_city}>
      <h1>{`Events in ${data[0]?.city}`}</h1>
      <div>
        {data.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.city}/${event.id}`}
            passHref
          >
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

export default EventsPerCity;
