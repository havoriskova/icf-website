import Head from 'next/head';
// import Image from 'next/image';
import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
// import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

const name = 'ICF Upemba';

export default function Layout({ children, home, pageTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/icf_logo.ico.png" />    
      </Head>

      <header className={styles.header}>
        <Navbar />
      </header>
      
      <main>{children}</main>

     <Footer />
    </div>
  );
}