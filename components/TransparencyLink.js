import styles from './transparencyLink.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function TransparencyLink() {


    return(
        <div className="contentWidth">
            <div className="headingForSections centeredText">
                <h3>Subtitle about transparency<span className='headingRedDot'>.</span></h3>
            </div>

            <div className={styles.flexParentTwoSameCol}>
                <div  className={styles.card}>
                    <p>Read about our transparency or download some fact sheets</p>
                    <button className='readMore'><Link href='/transparency'>Read more</Link></button>
                </div>
                <div className={styles.imageStyleContainer}>
                    <Image alt='placeholder' src='/images/transparency_picture.jpg' width={500} height={100}></Image>
                </div>
            </div>

        </div>
    )


}