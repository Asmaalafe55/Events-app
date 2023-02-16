import MainLayout from '../src/components/layout/MainLayout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
  if (router.pathname === '/sign-in' || router.pathname === '/sign-up') {
    return <Component {...pageProps} />;
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
