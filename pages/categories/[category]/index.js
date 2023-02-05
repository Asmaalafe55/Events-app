import React from 'react';
import axios from '../../../utils/axios';
import EventsPerCategory from '../../../src/components/events/EventsPerCategory';

const EventsCategory = (props) => {
  const data = props.events;
  return <EventsPerCategory data={data} />;
};

export default EventsCategory;

export async function getStaticPaths() {
  const { data: dataForCategories } = await axios.get('/categories');

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

  const { data } = await axios.get('/events');

  const events = data.filter((e) => e.category.category === id);

  return {
    props: { events },
  };
}
