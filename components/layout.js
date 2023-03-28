import Head from 'next/head';
import styles from './layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
// import React, { useEffect, useState } from 'react';



// const name = 'ICF Upemba';




export default function Layout({ children, home, pageTitle }) {

  // this onScroll function will be only for homepage, other pages will have styling of 'scrolled nav' by default:

  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //     const onScroll = () => setOffset(window.pageYOffset);
  //     // clean up code
  //     window.removeEventListener('scroll', onScroll);
  //     window.addEventListener('scroll', onScroll, { passive: true });
  //     return () => window.removeEventListener('scroll', onScroll);
  // }, []);


  //<div className={`${styles.navbar} ${(!home || offset > 0) ? styles.scrolled : null}`}>..
  // console.log(home, offset); 

  return (
    <div className={styles.container}>

      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/icf_logo.ico.png" />    
      </Head>

      <div className={styles.navbar}>
        <Navbar />
      </div>
      
      <main className={styles.container}>{children}</main> {/* I don't want to put the class container in here on main because of the video component */}

      <div className={styles.footer}>
        <Footer />
      </div>

    </div>
  );
}