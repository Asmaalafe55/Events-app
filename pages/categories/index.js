import React from 'react';
import axios from '../../utils/axios';

import CategoriesPage from '../../src/components/events/CategoriesPage';

const Events = (props) => {
  const data = props.data;
  return <CategoriesPage data={data} />;
};

export default Events;

export async function getStaticProps() {
  const res = await axios.get('/categories');
  return {
    props: {
      data: res.data,
    },
  };
}
