
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
                    <div className={styles.footerBottomGridChild}>
                        <img alt='logo' src='/icf_logo.ico.png'/>
                    </div>
                    <div className={styles.footerBottomGridChild}>
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="2">Get in touch</th>
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
                    </div>
                    <div className={styles.footerBottomGridChild}>
                    Sitemap?
                    </div>
                </div>
                <div className={styles.termsOfUse}>
                        <p>Terms of use</p>
                        <p>Privacy policy</p>
                </div>
                <div className={styles.copyEmailNotification} id='copyEmail' >"hello@icf.earth" copied to your clipboard</div>
            </div>
        </div>
        
    )
}