import styles from './getInvolvedFancyLink.module.css';
import Link from 'next/link';


export default function GetInvolvedFancyLink({imageStyle}) {

    const circleWithLeaves = 
            <div className={styles.circleWithLeavesContainer}>
                <img className={styles.image} alt='lion' src='/images/pexels_lion_placeholder.jpg' />
                <div className={styles.smallLeave}></div>
                <div className={styles.smallLeaveTwo}></div>
            </div>

    const oneImageLeaveShaped = 
            <div className={styles.oneImageLeaveShapedContainer}>
                <img alt='placeholder' src='/images/pexels-zebra-placeholder.jpg' />
            </div>


    const twoImagesLeaveShaped = 
            <div className={styles.twoImagesLeaveShapedContainer}>
                <div className={styles.subparentLeaveShapedImages}>
                    <img className={styles.imageOne} alt='zebra' src='/images/pexels-zebra-placeholder.jpg' />
                    <img className={styles.imageTwo} alt='zebra' src='/images/pexels_lion_placeholder.jpg' />
                </div>
            </div>


    return(
        <div className="contentWidth contenctWidthGetInvolved kumbhSansSemiBold">
            <div className={styles.flexParentTwoSameCol}>
                <div className={styles.imageStyleContainer}>
                    {imageStyle === 'circleWithLeaves' ? circleWithLeaves : null}
                    {imageStyle === 'OneImageLeaveShaped' ? oneImageLeaveShaped : null}
                    {imageStyle === 'TwoImagesLeaveShaped' ? twoImagesLeaveShaped : null}
                </div>
                <div className={styles.card}>
                    <p>Want to contribute to our mission? <br/> Learn how you can get involved</p>
                    <button className='readMore accentColor'><Link href='/get-involved'>Get Involved</Link></button>
                </div>
            </div>
        </div>
    )
}