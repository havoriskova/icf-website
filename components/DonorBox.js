import Script from "next/script";
import Link from 'next/link';
import styles from './donorbox.module.css';


export default function DonorBox() {

    return(
        <div className='contentWidth'>


                <div className="headerMd orangeText articleMargin">
                    <h3>Donate</h3>
                </div>

                <div className={styles.flexParent}>
                    <div>
                        <div><p>Text about how donation will help (what it funds, etc)</p></div>
                        <div className="centeredText">Prefer donating in crypto?  
                            <Link href='/donate-crypto'> Click here</Link>
                        </div>
                    </div>

                    <div className={styles.donorboxContainer}>
                        <iframe src="https://donorbox.org/embed/support-our-mission-38?default_interval=m&amount=25" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameBorder="0" scrolling="no" height="900px" width="100%" style={{maxWidth: '500px', minWidth: '250px', maxHeight: '700px'}}></iframe>
                    </div>
                </div>

                

                <Script src="https://donorbox.org/widget.js" paypalExpress="true"></Script> 
        </div>
    )
}



{/* donorbox.org widget:
<script src="https://donorbox.org/widget.js" paypalExpress="true"></script>
<iframe src="https://donorbox.org/embed/support-our-mission-38?default_interval=m&amount=25" name="donorbox" 
allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" 
width="100%" style="max-width: 500px; min-width: 250px; max-height:none!important"></iframe> 
*/}