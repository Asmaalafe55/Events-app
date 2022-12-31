import Head from 'next/head';
import HomePage from '../src/components/home/HomePage';

export default function Home(props) {
  const data = props.data;
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await import('/data/data.json');
  return {
    props: {
      data: data.events_categories,
    },
  };
}
