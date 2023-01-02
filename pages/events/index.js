import React from 'react';

import EventsPage from '../../src/components/events/EventsPage';

const Events = (props) => {
  const data = props.data;
  return <EventsPage data={data} />;
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
