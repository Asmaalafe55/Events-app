import React from 'react';
import axios from '../../utils/axios';

import SignPage from '../../src/components/sign/SignPage';

const Sign = (props) => {
  const data = props.data;
  return <SignPage data={data} />;
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
