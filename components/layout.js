import Head from 'next/head';
import styles from './layout.module.css';
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
      
      <main className={styles.container}>{children}</main> {/* I don't want to put the class container in here on main because of the video component */}

      <div className={styles.footer}>
        <Footer />
      </div>

    </div>
  );
}