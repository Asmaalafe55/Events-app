import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
