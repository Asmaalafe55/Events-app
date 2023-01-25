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
  console.log(5, dataForCategories[1].category);

  const allPaths = dataForCategories.map((e) => {
    return {
      params: { category: e.category.toString() },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.category;
  console.log(6, id);
  const { data } = await axios.get('/events');

  const events = data.filter((e) => e.category.category === id);

  return {
    props: { events },
  };
}
