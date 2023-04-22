import styles from "./founding.module.css";



export default function Founding({article}) {

    return(
        <div className="contentWidth">
            <div className='headingForSections'>
                <h3>why we started<span className='headingRedDot'>.</span></h3>
            </div>

            <div className={styles.flexParentTwoSameCol}>
                <p className="paragraph">
                    {article}
                </p>
                <div className={styles.parentLeaveShapedImages}>
                        <div className={styles.subparentLeaveShapedImages}>
                            <img className={styles.imageOne} alt='zebra' src='/images/pexels-zebra-placeholder.jpg' />
                            <img className={styles.imageTwo} alt='zebra' src='/images/pexels_lion_placeholder.jpg' />
                        </div>
                        
                </div>
            </div>

        </div>
    )
}