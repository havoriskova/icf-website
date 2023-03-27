
import styles from './footer.module.css';

export default function ContactComponent() {


return(
    <div className='contentWidth'>
        <div  className="headingForSections centeredWithLeave">
                        <span className="headingLeave orangeLeave centerLeave"></span>
                        <h3>contact us<span className="headingRedDot">.</span></h3>
        </div>

        <div className="headingForSections greenMiddleHeading">
            <h3>Got questions?</h3>
        </div>

        <div>
            mailchimp form
        </div>

        <div className="headingForSections greenMiddleHeading">
            <h3>Or come say hello at</h3>
        </div>

        <div>
                        <table>
                            <tbody>
                                <tr className={styles.row}>
                                    <td><img alt='logo-place' src='../images/Place.png' /></td>
                                    <td className={styles.adress}>Cattenhagestraat 21 <br /> 
                                        1411 CR Naarden <br/>
                                        Nederland</td>
                                </tr>
                                <tr className={styles.row}>
                                    <td><img alt='logo-letter' src='../images/Letter.png' /></td>
                                    <td className={styles.copyEmail} onClick={() => {navigator.clipboard.writeText("hello@icf.earth"); let notification = document.querySelector('#copyEmail'); notification.classList.add(`${styles.active}`); setTimeout(() => {notification.classList.remove(`${styles.active}`)}, 2000); }}> hello@icf.earth</td> 
                                </tr>
                            </tbody>
                        </table>
        </div>


    </div>
)


}