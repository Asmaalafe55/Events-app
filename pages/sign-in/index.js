import React from 'react';
import axios from '../../utils/axios';

import LoginPage from '../../src/components/sign/LoginPage';

const Sign = (props) => {
  const data = props.data;
  return <LoginPage data={data} />;
};

export default Sign;

export async function getStaticProps() {
  const res = await axios.get('/users');
  return {
    props: {
      data: res.data,
    },
  };
}
