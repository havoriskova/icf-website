import Layout from '../components/layout.js';
import styles from './partners.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Partners() {

    return (
        <Layout pageTitle='ICF Partners'>
            <div className='container'>

        
        
                <div className='firstComponentOnPage'>
                    <div  className="headingForSections centeredWithLeave">
                                <span className="headingLeave orangeLeave centerLeave"></span>
                                <h3>Our Partners<span className="headingRedDot">.</span></h3>
                    </div>
                </div>

                
                <div className='contentWidth'>

                    <div className="headerMd greenMiddleHeading">
                        <h3>Funding partners</h3>
                    </div>


                    <div className={styles.flexParentForLogos}>
                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/funding1.png' width={100} height={50} /></div>
                        </div>

                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/fuding2.jpg' width={100} height={50} /></div>
                        </div>

                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/funding3.jpg' width={100} height={50} /></div>
                        </div>

                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/funding4.jpg' className={styles.invertColor} width={100} height={50} /></div>
                        </div>

                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/funding5.jpg' width={100} height={50} /></div>
                        </div>

                    </div>

                    <div className="headerMd greenMiddleHeading">
                        <h3>Conservation partners</h3>
                    </div>

                    <div  className={styles.flexParentForLogos}>
                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/conservation1.jpg' width={100} height={50} /></div>
                        </div>

                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/conservation2.png' width={100} height={50} /></div>
                        </div>
                    </div>

                    <div className="headerMd greenMiddleHeading">
                        <h3>Technical partners</h3>
                    </div>
                    <div  className={styles.flexParentForLogos}>
                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/technical1.jpg' width={100} height={50} /></div>
                        </div>
                    </div>
                    
                </div>




                    <div className='articleMargin centeredText lastComponentOnPage'>
                        <h4 className='kumbhSansSemiBold'>Want to partner with ICF? Contact us below</h4>
                        <button className='readMore accentColor'><Link href=''>Become a partner</Link></button>
                    </div>

            </div>

        </Layout>
    )
}