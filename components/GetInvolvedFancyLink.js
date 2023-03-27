import styles from './getInvolvedFancyLink.module.css';


export default function GetInvolvedFancyLink({imageStyle}) {

    const circleWithLeaves = 
            <div className={styles.circleWithLeavesContainer}>
                <img className={styles.image} alt='lion' src='/images/pexels_lion_placeholder.jpg' />
                <div className={styles.smallLeave}></div>
                <div className={styles.smallLeaveTwo}></div>
            </div>


    return(
        <div className="contentWidth kumbhSansSemiBold">
            <div className={styles.flexParentTwoSameCol}>
                <div className={styles.imageStyleContainer}>
                    {imageStyle === 'circleWithLeaves' ? circleWithLeaves : none}
                </div>
                <div className={styles.card}>
                    <p>Want to contribute to our mission? <br/> Learn how you can get involved</p>
                    <button className='readMore accentColor'>Get Involved</button>
                </div>
            </div>
        </div>
    )
}