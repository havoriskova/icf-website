
import Link from 'next/link';
import styles from './relatedStories.module.css';


export default function RelatedStories() {

    return (
            <div className='contentWidth'>
                <div className='firstComponentOnPage'>  
                    <div  className="headingForSections">
                            <h3>Related stories<span className="headingRedDot">.</span></h3>
                    </div>
                </div>
                

                <div className={styles.blogGridContainer}>
                    <div className={styles.card}>
                            <Link href='/blog/blog-post-1'>
                                <div className={styles.imageContainer}>
                                    <img alt='placeholder' src='/images/blog_1.jpg' />
                                </div>
                                <div className={styles.cardInfo}>Title of the blog - Mar 10, 2023</div>
                                <div className={styles.cardTitle}>A short summary of what the blog is about.</div>
                            </Link>
                    </div>

                    <div className={styles.card}>
                            <Link href='/blog/blog-post-1'>
                                <div className={styles.imageContainer}>
                                    <img alt='placeholder' src='/images/blog_2.jpg' />
                                </div>
                                <div className={styles.cardInfo}>Title of the blog - Mar 10, 2023</div>
                                <div className={styles.cardTitle}>A short summary of what the blog is about.</div>
                            </Link>
                    </div>

                </div>
                
            </div>
    )
}