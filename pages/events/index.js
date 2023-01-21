import React from 'react';
import axios from '../../utils/axios';

import EventsPage from '../../src/components/events/EventsPage';

const Events = (props) => {
  const data = props.data;
  return <EventsPage data={data} />;
};

export default Events;

export async function getStaticProps() {
  const res = await axios.get('/events');
  return {
    props: {
      data: res.data.events_categories,
    },
  };
}
