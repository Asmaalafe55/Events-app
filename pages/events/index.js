import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Events = (props) => {
  const data = props.data;
  return (
    <div>
      <h1>Events Page</h1>
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

export default Events;

export async function getStaticProps() {
  const data = await import('/data/data.json');
  return {
    props: {
      data: data.events_categories,
    },
  };
}
