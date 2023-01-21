import React from 'react';
import axios from '../../../utils/axios';
import SingleEvent from '../../../src/components/events/SingleEvent';

const Event = ({ data }) => <SingleEvent data={data} />;

export default Event;

export async function getStaticPaths() {
  const {
    data: { allEvents },
  } = await axios.get('/events');
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

  const {
    data: { allEvents },
  } = await axios.get('/events');

  const eventData = allEvents.find((e) => e.id === id);

  return {
    props: { data: eventData },
  };
}
