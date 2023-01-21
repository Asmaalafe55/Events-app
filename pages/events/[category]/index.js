import React from 'react';
import axios from '../../../utils/axios';
import EventsPerCity from '../../../src/components/events/EventsPerCity';

const EventsCategoryCity = (props) => {
  const data = props.events;
  return <EventsPerCity data={data} />;
};

export default EventsCategoryCity;

export async function getStaticPaths() {
  const { data } = await axios.get('/events');
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
  const { data } = await axios.get('/events');

  const events = data.allEvents.filter((e) => e.city === id);

  return {
    props: { events },
  };
}
