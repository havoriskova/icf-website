
import styles from './footer.module.css';


export default function Footer() {

    return(
        <div className={`${styles.footerTest} ${styles.footer}`}>
           <div className={styles.containerContent}>
                <div className={styles.bottomBorder}>
                    <p className={styles.center}>Follow us</p>
                    <p className={styles.center}>
                        <img alt='logo-fcb' src='../images/Facebook.png' />
                        <img alt='logo-insta' src='../images/Instagram.png' />
                        <img alt='logo-twitter' src='../images/Twitter.png' />

                    </p>
                    
                </div>
            <div className={styles.footerBottomGrid}>
                <p className={styles.footerBottomGridChild}>
                    <img alt='logo' src='/icf_logo.ico.png'/>
                </p>
                <p className={styles.footerBottomGridChild}>
                    <p>Get in touch</p>
                    <p>
                        <img alt='logo-place' src='../images/Place.png' />
                        <p>Cattenhagestraat 211411 CR</p>
                        <p>Naarden, Nederland</p>
                    </p>
                    <p>
                        <img alt='logo-letter' src='../images/Letter.png' />
                        <p>hello@icf.earth</p> {/* kdyz to zmacknes, tak se ti to zkopiruje*/}
                    </p>
                    
                </p>
                <p className={styles.footerBottomGridChild}>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                </p>
            </div>
        </div>
        </div>
        
    )
}