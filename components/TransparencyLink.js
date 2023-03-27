import styles from './transparencyLink.module.css';


export default function TransparencyLink() {


    return(
        <div className="contentWidth">
            <div className="headingForSections centeredText">
                <h3>Subtitle about transparency<span className='headingRedDot'>.</span></h3>
            </div>

            <div className={styles.flexParentTwoSameCol}>
                <div  className={styles.card}>
                    <p>Read about our transparency or download some fact sheets</p>
                    <button className='readMore'>Read more</button>
                </div>
                <div className={styles.imageStyleContainer}>
                    <img alt='placeholder' src='/images/pexels_nature.jpg'/>
                </div>
            </div>

        </div>
    )


}