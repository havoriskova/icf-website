import Script from "next/script";
import Link from 'next/link';


export default function DonorBox() {

    return(
        <div className="contentWidth">


                <div className="headingForSections greenMiddleHeading">
                    <h3>Donate</h3>
                </div>

                <div>
                    <iframe src="https://donorbox.org/embed/support-our-mission-38?default_interval=m&amount=25" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameBorder="0" scrolling="no" height="900px" width="100%" style={{maxWidth: '500px', minWidth: '250px', maxHeight: '700px'}}></iframe>
                </div>

                <div className="centeredText">Prefer donating in crypto?  
                    <Link href='/donate-crypto'> Click here</Link>
                </div>

                <Script src="https://donorbox.org/widget.js" paypalExpress="true"></Script> 
        </div>
    )
}