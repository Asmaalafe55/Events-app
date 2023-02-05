import MainLayout from '../src/components/layout/MainLayout';
// import 'antd/dist/reset.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
