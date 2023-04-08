import Link from 'next/link';
import styles from './partnerships.module.css';


export default function Partnerships() {

    return(
        <div className="contentWidth">
            <div className='headingForSections centeredText'>
                <h3>Our partners<span className='headingRedDot'>.</span></h3>
            </div>
            



            <div className={styles.flexParentForLogosCarousel}>
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

                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/conservation1.jpg' width={100} height={50} /></div>
                        </div>

                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/conservation2.png' width={100} height={50} /></div>
                        </div>
                        
                        <div className={styles.logoParent}>
                            <div><Image alt='logo' src='/images/partners/technical1.jpg' width={100} height={50} /></div>
                        </div>

            </div>
           
            <button className="readMore"><Link href='/partners'>Read more</Link></button>
            
        </div>
    )
}