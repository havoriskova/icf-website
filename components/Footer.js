
import styles from './footer.module.css';


export default function Footer() {

    return(
        <div className={`${styles.footerTest} ${styles.footer}`}>
           <div className={styles.containerContent}>
                <div className={styles.bottomBorder}>
                    <h6 className={styles.center}>Follow us</h6>
                    <p className={`${styles.center} ${styles.socials}`}>
                        <a href=''  target='https://www.linkedin.com/company/international-conservation-fund/'><img alt='logo-linkedIn' src='../images/linkedIn.svg' /></a>
                        <a href='https://www.instagram.com/icf.earth/' target='_blank'><img alt='logo-insta' src='../images/insta.svg' /></a>
                        <a href='https://twitter.com/icf_earth'  target='_blank'><img alt='logo-twitter' src='../images/twitter.svg' /></a>
                    </p>
                </div>

                <div className={styles.footerBottomGrid}>
                    <div className={styles.footerBottomGridChild}>
                        <img alt='logo' src='/icf_logo.ico.png'/>
                    </div>
                    <div className={`${styles.footerBottomGridChild} ${styles.sitemap}`}>
                        <h6>Get involved</h6>
                        <p>Donate</p>
                        <p>Donate using crypto</p>
                        <h6>Stories</h6>
                    </div>
                    <div className={`${styles.footerBottomGridChild} ${styles.sitemap}`}>
                        <h6>About ICF</h6>
                        <p>Meet the team</p>
                        <p>Our work</p>
                        <p>Contact us</p>
                        <h6>Impact shop</h6>
                    </div>
                    <div className={`${styles.footerBottomGridChild} ${styles.sitemap}`}>
                        <h6>Partners</h6>
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
                                    <td><img alt='logo-place' src='../images/Place.png' /></td>
                                    <td>Cattenhagestraat 211411 CR<br/>
                                        Naarden, Nederland</td>
                                </tr>
                                <tr className={styles.row}>
                                    <td><img alt='logo-letter' src='../images/Letter.png' /></td>
                                    <td className={styles.copyEmail} onClick={() => {navigator.clipboard.writeText("hello@icf.earth"); let notification = document.querySelector('#copyEmail'); notification.classList.add(`${styles.active}`); setTimeout(() => {notification.classList.remove(`${styles.active}`)}, 2000); }}> hello@icf.earth</td> 
                                </tr>
                            </tbody>
                        </table>
                        <h6>Terms of use</h6>
                        <h6>Privacy policy</h6>
                        <h6>Transparency</h6>
                    </div>
                   
                </div>

                <div className={styles.ourAccreditation}>
                        <h6>Our accreditaion</h6>
                        <div className={styles.ourAccreditationFlex}>
                            <span><img alt='anbi' src='./images/anbi.png'/></span>
                            <span><img alt='ngo' src='./images/ngo.png'/></span>
                        </div>
                </div>
                <div className={styles.copyEmailNotification} id='copyEmail' >"hello@icf.earth" copied to your clipboard</div>
            </div>
        </div>
        
    )
}