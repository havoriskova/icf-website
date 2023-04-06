import styles from './blogPost.module.css';

export default function BlogPost() {

    return(
        <div className="contentWidth">
            <div className="headerMd greenMiddleHeading">
                <h3>Blog title</h3>
                <div className={`${styles.subHeading} kumbhSansSemiBold`}>Author and date</div>
            </div>
           
            <div className={styles.blogArticle}>
              <div className={styles.imageContainerFullWidth}>
                <img alt='placeholder' src='/images/homepage_2.jpg'/>
              </div>

              <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quisquam asperiores, nostrum assumenda sunt omnis itaque incidunt ratione enim ipsa ullam, voluptate facilis officiis in molestiae totam nihil neque!</p>

              <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem recusandae ducimus voluptatem deleniti molestias nostrum molestiae, modi asperiores aspernatur dolor deserunt sed! Sunt iure earum iusto ducimus ipsa, officiis fuga?
              Suscipit perspiciatis similique quos ea officiis soluta corporis corrupti iste quisquam cupiditate tempora ullam, eaque, debitis saepe. Eveniet possimus debitis doloribus blanditiis, fuga laudantium pariatur magni animi modi libero. Minus?</p>


              <div className={styles.lastParagraph}>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis voluptatem placeat veritatis ex natus quae commodi sequi? Enim, consequuntur. Nulla repellat consequatur hic consequuntur laboriosam cupiditate quasi quos tempora error. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quia, voluptate ratione laboriosam natus quaerat aliquam fuga? Dolor temporibus nemo provident, expedita eaque sunt, iusto eveniet error at minus quas.</p>
                
                    <div className={styles.imageContainerHalfWidth}>
                        <img alt='placeholder' src='/images/homepage_3.jpg'/>
                    </div>
            
              </div>
            
            </div>

            <div className={styles.buttonsAfterArticle}>
                <button className='readMore'><a>Share article</a></button>
                <button className='readMore'><a>Give</a></button>
            </div>

        </div>
    )
}