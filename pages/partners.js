import Layout from '../components/layout.js';
import styles from './partners.module.css';
import Link from 'next/link';

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
                        <h3>Subtitle (type of partner)</h3>
                    </div>


                    <div className={styles.flexParentForLogos}>
                        <div className={styles.logoParent}>
                            <div>Partner logo linking to partner website</div>
                        </div>

                        <div className={styles.logoParent}>
                            <div>Partner logo linking to partner website</div>
                        </div>

                        <div className={styles.logoParent}>
                            <div>Partner logo linking to partner website</div>
                        </div>

                        <div className={styles.logoParent}>
                            <div>Partner logo linking to partner website</div>
                        </div>

                    </div>

                    <div className="headerMd greenMiddleHeading">
                        <h3>Subtitle (type of partner)</h3>
                    </div>

                    <div  className={styles.flexParentForLogos}>
                        <div className={styles.logoParent}>
                            <div>Partner logo linking to partner website</div>
                        </div>

                        <div className={styles.logoParent}>
                            <div>Partner logo linking to partner website</div>
                        </div>

                        <div className={styles.logoParent}>
                            <div>Partner logo linking to partner website</div>
                        </div>

                        <div className={styles.logoParent}>
                            <div>Partner logo linking to partner website</div>
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