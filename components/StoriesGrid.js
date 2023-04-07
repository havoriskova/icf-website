
import Link from 'next/link';
import styles from './storiesGrid.module.css';
import Image from 'next/image';


export default function BlogPostOne() {

    return (
            <div className='contentWidth'>
                
                <div className={styles.searchStoriesContainer}>
                    <input type='search' className={styles.searchStoriesInput} />
                    <div className={styles.searchIcon}>
                        <Image alt='search icon' src='/images/magni-glas.svg' width={20} height={20}></Image>
                    </div>
                </div>

                <div className={styles.filterStoriesContainer}>
                    
                    <input type='radio' name='filterStories' value='Newest' id='newest' checked/>
                    <label for='newest'><button className={styles.filterButton}>Newest</button></label>
                    
                    <input type='radio' name='filterStories' value='Wildlife' id='wildlife'/>
                    <label for='wildlife'><button className={styles.filterButton}>Wildlife</button></label>
                
                    
                    <input type='radio' name='filterStories' value='Social' id='social'/>
                    <label for='social'><button className={styles.filterButton}>Social</button></label>
                    
                </div>


                <div className={styles.blogGridContainer}>

                
                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_1.jpg' />
                            </div>
                            <div className={styles.cardInfo}>Mar 10, 2023 by Author</div>
                            <div className={styles.cardTitle}>Title of blog</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_2.jpg' />
                            </div>
                            <div className={styles.cardInfo}>Mar 10, 2023 by Author</div>
                            <div className={styles.cardTitle}>Title of blog</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_3.jpg' />
                            </div>
                            <div className={styles.cardInfo}>Mar 10, 2023 by Author</div>
                            <div className={styles.cardTitle}>Title of blog</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_4.jpg' />
                            </div>
                            <div className={styles.cardInfo}>Mar 10, 2023 by Author</div>
                            <div className={styles.cardTitle}>Title of blog</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_5.jpg' />
                            </div>
                            <div className={styles.cardInfo}>Mar 10, 2023 by Author</div>
                            <div className={styles.cardTitle}>Title of blog</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_6.jpg' />
                            </div>
                            <div className={styles.cardInfo}>Mar 10, 2023 by Author</div>
                            <div className={styles.cardTitle}>Title of blog</div>
                        </Link>
                    </div>
                

                </div>



                
            </div>
    )
}