import React from 'react';
import axios from '../../../utils/axios';
import EventsPerCity from '../../../src/components/events/EventsPerCity';

const EventsCategoryCity = (props) => {
  const data = props.events;
  return <EventsPerCity data={data} />;
};

export default EventsCategoryCity;

export async function getStaticPaths() {
  const { data: dataForCategories } = await axios.get('/categories');

  const allPaths = dataForCategories.map((category) => {
    return {
      params: { category: category.category.toString() },
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

  const events = data.filter((e) => e.category.id === id);

  return {
    props: { events },
  };
}
