import styles from "./founding.module.css";



export default function Founding() {

    return(
        <div className="contentWidth">
            <div className='headingForSections'>
                <h3>why we started<span className='headingRedDot'>.</span></h3>
            </div>

            <div className={styles.flexParentTwoSameCol}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quidem ea esse aliquid explicabo nihil nam. Ut sequi vitae corporis dolorum repellat. 
                    Ipsa exercitationem explicabo repudiandae at corrupti pariatur aspernatur autem.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni numquam quasi ratione atque repellat. 
                    Saepe laborum tempore necessitatibus nulla expedita quidem officiis quasi eveniet odio. 
                    Officiis enim assumenda vero placeat?
                    Voluptatibus at ut magnam nihil adipisci. Nihil beatae eos reprehenderit laboriosam delectus, 
                    distinctio quaerat ducimus consectetur repellat unde repudiandae eaque exercitationem dignissimos dolores, optio, 
                    expedita architecto eius voluptatibus? Ut, voluptatum.
                </p>
                <div className={styles.parentLeaveShapedImages}>
                        <div className={styles.subparentLeaveShapedImages}>
                            <img className={styles.imageOne} alt='zebra' src='./images/pexels-zebra-placeholder.jpg' />
                            <img className={styles.imageTwo} alt='zebra' src='./images/pexels_lion_placeholder.jpg' />
                        </div>
                        
                </div>
            </div>

        </div>
    )
}