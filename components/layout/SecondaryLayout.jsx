import React from 'react';
import ButtomFooter from '../footer/ButtomFooter';
import Navbar from '../navbar/Navbar';

const SecondaryLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ButtomFooter />
    </>
  );
};

export default SecondaryLayout;
