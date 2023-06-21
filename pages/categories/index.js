import React from 'react';
import axios from '../../utils/axios';

import CategoriesPage from '../../components/categories/CategoriesPage';

const Categories = (props) => {
  const data = props.data;
  return <CategoriesPage data={data} />;
};

export default Categories;

export async function getStaticProps() {
  const res = await axios.get('/categories');
  return {
    props: {
      data: res.data,
    },
  };
}
