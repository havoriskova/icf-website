import styles from "./founding.module.css";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



export default function Founding({props}) {

    console.log(props);


    return(
        <div className="contentWidth">
            <div className='headingForSections'>
                <h3>why we started<span className='headingRedDot'>.</span></h3>
            </div>

            <div className={styles.flexParentTwoSameCol}>
                <div className="paragraph">
                    {documentToReactComponents(props)}
                </div>
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