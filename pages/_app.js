import MainLayout from '../src/components/layout/MainLayout';
import SecondaryLayout from '../src/components/layout/SecondaryLayout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
  if (router.pathname === '/sign-in' || router.pathname === '/sign-up') {
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
