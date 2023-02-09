import Head from 'next/head';
// import Image from 'next/image';
import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
// import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import Script from 'next/script';

const name = 'ICF Upemba';

export default function Layout({ children, home, pageTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/icf_logo.ico.png" />    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
      </Head>

      <header className={styles.header}>
        <Navbar />
      </header>
      
      <main>{children}</main>

      <div className={styles.footer}>
        <Footer />
      </div>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></Script>
    </div>
  );
}