import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EventsCategoryCity = (props) => {
  const data = props.events;
  return (
    <div>
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
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCategoryCity;

export async function getStaticPaths() {
  const data = await import('/data/data.json');
  const allPaths = data.events_categories.map((event) => {
    return {
      params: { category: event.id.toString() },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.category;
  const data = await import('/data/data.json');

  const events = data.allEvents.filter((e) => e.city === id);

  return {
    props: { events },
  };
}
