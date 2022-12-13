import type { NextPage } from 'next';
import Head from 'next/head';
import { queryDatabase } from './api/query_db.js';
import styles from '../styles/Home.module.css';
import { parseProperties } from '../utils/parse_properties.js';

const Home = ({posts}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Silas' descent into madness  </title>
        <meta
          name="description"
          content="Notion blog generated from Notion API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Silas' descent into madness</h1>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </main>
      </div>
  );
};

export async function getStaticProps() {
  const database = await queryDatabase();
  const posts = parseProperties(database);

  return {
    props: {
      posts,
    },
  };
}
export default Home;