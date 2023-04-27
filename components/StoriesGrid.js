
import Link from 'next/link';
import styles from './storiesGrid.module.css';
import Image from 'next/image';


export default function BlogPostOne({props}) {

    //console.log(props);

    return (
            <div className='contentWidth'>
                
                <div className={styles.searchStoriesContainer}>
                    <input type='search' className={styles.searchStoriesInput} />
                    <div className={styles.searchIcon}>
                        <Image alt='search icon' src='/images/magni-glas.svg' width={20} height={20}></Image>
                    </div>
                </div>

                {/* <div className={styles.filterStoriesContainer}>
                    
                    <input type='radio' name='filterStories' value='Newest' id='newest'/>
                    <label htmlFor='newest'><button className={styles.filterButton}>Newest</button></label>
                    
                    <input type='radio' name='filterStories' value='Wildlife' id='wildlife'/>
                    <label htmlFor='wildlife'><button className={styles.filterButton}>Wildlife</button></label>
                
                    
                    <input type='radio' name='filterStories' value='Social' id='social'/>
                    <label htmlFor='social'><button className={styles.filterButton}>Social</button></label>
                    
                </div> */}


                <div className={styles.blogGridContainer}>

                
                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_1.jpg' />
                            </div>
                            <div className={styles.cardInfo}>{props.blogOne.authorDate}</div>
                            <div className={styles.cardTitle}>{props.blogOne.title}</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_2.jpg' />
                            </div>
                            <div className={styles.cardInfo}>{props.blogTwo.authorDate}</div>
                            <div className={styles.cardTitle}>{props.blogTwo.title}</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_3.jpg' />
                            </div>
                            <div className={styles.cardInfo}>{props.blogThree.authorDate}</div>
                            <div className={styles.cardTitle}>{props.blogThree.title}</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_4.jpg' />
                            </div>
                            <div className={styles.cardInfo}>{props.blogFour.authorDate}</div>
                            <div className={styles.cardTitle}>{props.blogFour.title}</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_5.jpg' />
                            </div>
                            <div className={styles.cardInfo}>{props.blogFive.authorDate}</div>
                            <div className={styles.cardTitle}>{props.blogFive.title}</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <Link href='/blog/blog-post-1'>
                            <div className={styles.imageContainer}>
                                <img alt='placeholder' src='/images/blog_6.jpg' />
                            </div>
                            <div className={styles.cardInfo}>{props.blogSix.authorDate}</div>
                            <div className={styles.cardTitle}>{props.blogSix.title}</div>
                        </Link>
                    </div>
                

                </div>



                
            </div>
    )
}