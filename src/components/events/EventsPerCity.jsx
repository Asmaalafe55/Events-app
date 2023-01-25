import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './EventsPerCity.module.scss';

const EventsPerCity = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.events_per_city}>
      <h1>Events in {data[0]?.category.title}</h1>
      <div>
        {data.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.category.category}/${event.id}`}
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
