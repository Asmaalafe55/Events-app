import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './CategoriesPage.module.scss';

const CategoriesPage = ({ data }) => {
  return (
    <div className={styles.events}>
      <label>Categories</label>
      <div>
        {data.map((event) => (
          <Link key={event.category} href={`/categories/${event.category}`}>
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

export default CategoriesPage;
