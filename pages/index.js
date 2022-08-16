import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Step from './step';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brasil Diário</title>
      </Head>
      <Step />
    </div>
  );
}
