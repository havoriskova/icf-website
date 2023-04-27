import styles from './blogPost.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function BlogPost({props}) {
    //console.log(props);
    //console.log(props.title);

    return(
        <div className="contentWidth">
            <div className="headerMd greenMiddleHeading">
                <h3>{props.title}</h3>
                <div className={`${styles.subHeading} kumbhSansSemiBold`}>{props.authorDate}</div>
            </div>
           
            <div className={styles.blogArticle}>

              <div className={styles.shareLinkContainerTop}><a  className='greenMiddleHeading'><img alt='icon' className={styles.iconShareTop}  src='/images/Vector-share-green.svg'/><span className={styles.linkShare}>Share article</span></a></div>

              <div className={styles.imageContainerFullWidth}>
                <img alt='placeholder' src='/images/homepage_2.jpg'/>
              </div>

             <div>
                {documentToReactComponents(props.blogArticle)}
             </div>
             
            </div>

            <div className={styles.buttonsAfterArticle}>
                <button className={`readMore ${styles.shareArticleDownButton}`}>
                    <a>
                        Share article
                        <img alt='icon' src='/images/Vector-share-green.svg' className={styles.iconShareDown}/>
                    </a>
                </button>
                <button className='readMore'><a>Give</a></button>
            </div>

        </div>
    )
}