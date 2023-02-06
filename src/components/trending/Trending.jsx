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
          <div key={event._id} class={styles.card}>
            <Image
              class={styles.card_img}
              width={200}
              height={200}
              alt={event.title}
              src={event.image}
            />
            <p class={styles.text_body}>{event.description}</p>

            <Link
              class={styles.text_title}
              key={event._id}
              href={`/categories/${event.category}`}
            >
              {event.title}
            </Link>
          </div>

          // <Link key={event._id} href={`/categories/${event.category}`}>
          //   <Image
          //     width={200}
          //     height={200}
          //     alt={event.title}
          //     src={event.image}
          //   />

          //   <div>
          //     <h2>{event.title}</h2>
          //     <p>{event.description}</p>
          //   </div>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
