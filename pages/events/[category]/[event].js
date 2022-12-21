import React from 'react';
import Image from 'next/image';

const Event = ({ data }) => {
  return (
    <div>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default Event;

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json');
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        category: path.city,
        event: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.event;
  const { allEvents } = await import('/data/data.json');

  const eventData = allEvents.find((e) => e.id === id);

  return {
    props: { data: eventData },
  };
}
