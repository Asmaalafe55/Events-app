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
          <Link
            key={event._id}
            className={styles.card}
            href={`/categories/${event.category}`}
          >
            <Image
              className={styles.card_img}
              width={200}
              height={200}
              alt={event.title}
              src={event.image}
            />
            <div className={styles.text_title}>{event.title}</div>
            <p className={styles.text_body}>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
