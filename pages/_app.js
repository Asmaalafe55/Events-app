import React, { useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import SecondaryLayout from '../components/layout/SecondaryLayout';
import AuthService from '../utils/authService';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    // Start the token check when the application loads
    AuthService.startTokenCheck();

    // Cleanup the token check interval when the component unmounts
    return () => {
      clearInterval(AuthService.tokenRenewalTimeout);
    };
  }, []);

  if (
    router.pathname === '/auth/sign-in' ||
    router.pathname === '/auth/sign-up'
  ) {
    return (
      <>
        <SecondaryLayout>
          <Component {...pageProps} />
        </SecondaryLayout>
      </>
    );
  }
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
