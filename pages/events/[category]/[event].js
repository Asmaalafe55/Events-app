import React from 'react';

import SingleEvent from '../../../src/components/events/SingleEvent';

const Event = ({ data }) => <SingleEvent data={data} />;

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
