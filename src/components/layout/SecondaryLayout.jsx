import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const SecondaryLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SecondaryLayout;
