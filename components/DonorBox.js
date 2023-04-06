import Script from "next/script";
import Link from 'next/link';
import styles from './donorbox.module.css';
import Image from 'next/image';


export default function DonorBox({getInvolved}) {

    return(
        <div className={styles.contentWidthDonate}>


                {getInvolved ? <div className="headerMd orangeText articleMargin centeredText">
                    <h3>Donate</h3>
                </div> : null}

                <div className={styles.flexParent}>
                    <div className={styles.donateMessage}>
                        <div><p>Text about how donation will help (what it funds, etc)</p></div>
                        {getInvolved ? <button className={`readMore ${styles.buttonBitcoin}`}>  
                            <Link href='/donate-crypto'> Donate in crypto   <Image className={styles.bitcoin} alt='logo' src='/images/bitcoin-vector.svg' width={20} height={20}></Image></Link>
                        </button> : null }
                    </div>

                    <div className={styles.donorboxContainer}>
                        <iframe src="https://donorbox.org/embed/support-our-mission-38?default_interval=m&amount=25" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameBorder="0" scrolling="no" height="599px" width="100%" style={{maxWidth: '423px', minWidth: '250px', maxHeight: '599px'}}></iframe>
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