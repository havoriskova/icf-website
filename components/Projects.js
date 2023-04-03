import styles from "./projects.module.css";
import Link from 'next/link';

export default function Projects() {

    return(
        <div className="contentWidth">
            <div className="headingForSections centeredText">
                <h3>Our work<span className='headingRedDot'>.</span></h3>
            </div>

            <h3 className="greenMiddleHeading headerMd">latest projects</h3>
            
            <div className={styles.flexParentTwoSameCol}>
                <div>
                    <div className={styles.parentImageBlog}>
                        <img className={styles.imageBlog} alt='placeholder' src='./images/pexels-blog-placeholder.jpg'/>
                    </div>
                    <h4 className={styles.titleBlog}>Title of the blog - Mar 10, 2023</h4>
                    <p>A short summary of what the blog is about.</p>
                </div>
                <div>
                    <div className={styles.parentImageBlog}>
                        <img className={styles.imageBlog} alt='placeholder' src='./images/pexels-blog-placeholder-two.jpg'/>
                    </div>
                    <h4 className={styles.titleBlog}>Title of the blog - Mar 10, 2023</h4>
                    <p>A short summary of what the blog is about.</p>
                </div>
            </div>

            <button className="readMore"><Link href='/about/our-work'>Explore all our projects</Link></button>
        </div>
    )
}