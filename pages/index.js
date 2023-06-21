import axios from '../utils/axios';
import Head from 'next/head';
import Trending from '../components/trending/Trending';
import Header from '../components/header/Header';
import Contact from '../components/contact/Contact';

export default function Home(props) {
  const data = props.data;
  return (
    <>
      <Head>
        <title>EventsApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header id="home" />
      <Trending data={data} />
      <Contact />
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get('/categories');
  return {
    props: {
      data: res.data,
    },
  };
}
