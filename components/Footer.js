
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {

    return(
        <div className={`${styles.footerTest} ${styles.footer}`}>
           <div className={styles.containerContent}>
                <div className={styles.bottomBorder}>
                    <h6 className={styles.center}>Follow us</h6>
                    <div className={`${styles.center} ${styles.socials}`}>
                        <a href='https://www.linkedin.com/company/international-conservation-fund/'  target='_blank'><img alt='logo-linkedIn' src='/images/linkedIn.svg' /></a>
                        <a href='https://www.instagram.com/icf.earth/' target='_blank'><img alt='logo-insta' src='/images/insta.svg' /></a>
                        <a href='https://twitter.com/icf_earth'  target='_blank'><img alt='logo-twitter' src='/images/twitter.svg' /></a>
                    </div>
                </div>

                <div className={styles.footerBottomGrid}>
                    <div className={styles.footerBottomGridChild}>
                        <Image className={styles.logoImg} alt="logo" src="/icf_logo.ico.svg" width={60} height={60}/>
                    </div>
                    <div className={`${styles.footerBottomGridChild} ${styles.sitemap}`}>
                        <h6><Link href='/get-involved'>Get involved</Link></h6>
                        <div className={styles.sitemapLink}><Link href='/donate'>Donate</Link></div>
                        <div className={styles.sitemapLink}><Link href='/donate-crypto'>Donate using crypto</Link></div>
                        <h6><Link href='/blog'>Stories</Link></h6>
                        <h6><Link href='/partners'>Partners</Link></h6>
                    </div>
                    <div className={`${styles.footerBottomGridChild} ${styles.sitemap}`}>
                        <h6><Link href='/about'>About ICF</Link></h6>
                        {/* <div className={styles.sitemapLink}><Link href='/get-involved'>Meet the team</Link></div> */}
                        <div className={styles.sitemapLink}><Link href='/about/our-work'>Our work</Link></div>
                        <div className={styles.sitemapLink}><Link href='/about/contact'>Contact us</Link></div>
                        <h6>Impact shop</h6>
                    </div>
                    {/* <div className={`${styles.footerBottomGridChild} ${styles.sitemap}`}>
                        <h6>Partners</h6>
                    </div> */}
                   
                </div>

                <div className={`${styles.footerBottomGridChild} ${styles.getInTouch}`}>
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="2"><h6>Get in touch</h6></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.row}>
                                    <td><img alt='logo-place' src='/images/Place.png' /></td>
                                    <td className={styles.adress}>Cattenhagestraat 21 <br /> 
                                        1411 CR Naarden <br/>
                                        Nederland</td>
                                </tr>
                                <tr className={styles.row}>
                                    <td><img alt='logo-letter' src='/images/Letter.png' /></td>
                                    <td className={styles.copyEmail} onClick={() => {navigator.clipboard.writeText("hello@icf.earth"); let notification = document.querySelector('#copyEmail'); notification.classList.add(`${styles.active}`); setTimeout(() => {notification.classList.remove(`${styles.active}`)}, 2000); }}> hello@icf.earth</td> 
                                </tr>
                            </tbody>
                        </table>
                    </div>

                <div className={styles.ourAccreditation}>
                        <h6>Our accreditations</h6>
                        <div className={styles.ourAccreditationFlex}>
                            <span><Image alt='anbi' src='/images/anbi.svg' width={150} height={100}></Image></span>
                            <a href='https://www.ngosource.org/about-equivalency-determination-on-file-badge?ref=https%3A%2F%2Ficf.earth%2F' target='_blank'><Image alt='ngo' src='/images/ngo.png' width={250} height={100}></Image></a>
                        </div>
                </div>
                <div className={styles.termsOfUse}>
                        <h6>Terms of use</h6>
                        <h6>Privacy policy</h6>
                        <h6><Link href='/transparency'>Transparency</Link></h6>
                </div>




                <div className={styles.copyEmailNotification} id='copyEmail' >"hello@icf.earth" copied to your clipboard</div>
            </div>
        </div>
        
    )
}