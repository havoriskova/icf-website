
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
                            </Link>
                            <div className={styles.cardInfo}>Mar 10, 2023 by Author</div>
                            <div className={styles.cardTitle}>Title of blog</div>
                    </div>

                    <div className={styles.card}>
                            <Link href='/blog/blog-post-1'>
                                <div className={styles.imageContainer}>
                                    <img alt='placeholder' src='/images/blog_2.jpg' />
                                </div>
                            </Link>
                            <div className={styles.cardInfo}>Mar 10, 2023 by Author</div>
                            <div className={styles.cardTitle}>Title of blog</div>
                    </div>

                </div>
                
            </div>
    )
}