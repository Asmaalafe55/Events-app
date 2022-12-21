import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const data = props.data;
  return (
    <div className={styles.container}>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <Link href="/">Home </Link>
          <Link href="/aboutUs">About Us </Link>
          <Link href="/events">Events</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <Image
              width={200}
              height={200}
              alt={event.title}
              src={event.image}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </main>

      <footer className={styles.footer}>
        <p>2022 ~ All rights reserved - Events app </p>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await import('/data/data.json');

  // const res = await fetch('URL');
  // const data1 = await res.json();

  // console.log(data.events_categories);

  return {
    props: {
      data: data.events_categories,
    },
  };
}
