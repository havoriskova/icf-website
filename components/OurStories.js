import styles from "./ourStories.module.css";
import Link from 'next/link';


export default function OurStories({props}) {

    // console.log(props.ourStoryParagraphs);
    // console.log(props.ourStoryPicture1);

    return(
        <div className="contentWidth">

            <div className="headingForSections">
                <span className="headingLeave"></span>
                <h3>Our story<span className='headingRedDot'>.</span></h3>
            </div>

            <div className={styles.flexParentTwoSameCol}>
                <p className="paragraph">
                    {/* {props.ourStoryParagraphs} */}
                </p>
                <div className={styles.parentLeaveShapedImages}>
                            <div className={styles.subparentLeaveShapedImages}>
                                <img className={styles.imageOne} alt='zebra' src={'https:' + props.ourStoryPicture1.fields.file.url} />
                                <img className={styles.imageTwo} alt='zebra' src={'https:' + props.ourStoryPicture2.fields.file.url} />
                            </div>
                            
                </div>
            </div>

            <button className="readMore"><Link href='/about'>Read more</Link></button>
        </div>
    )
}