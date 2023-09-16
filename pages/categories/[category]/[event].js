import React from 'react';
import axios from '../../../utils/axios';
import SingleEvent from '../../../components/events/SingleEvent';

const Event = ({ data }) => <SingleEvent data={data} />;

export default Event;

export async function getStaticPaths() {
  const { data } = await axios.get('/events');
  const allPaths = data.map((path) => {
    return {
      params: {
        category: path.category.category,
        event: path.id,
      },
    };
  });
  console.log('asmaaaaa');
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.event;
  const { data } = await axios.get('/events');

  const eventData = data.find((e) => e.id === id);

  return {
    props: { data: eventData },
  };
}
