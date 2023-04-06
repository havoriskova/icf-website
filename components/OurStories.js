import styles from "./ourStories.module.css";
import Link from 'next/link';


export default function OurStories() {

    return(
        <div className="contentWidth">

            <div className="headingForSections">
                <span className="headingLeave"></span>
                <h3>Our story<span className='headingRedDot'>.</span></h3>
            </div>

            <div className={styles.flexParentTwoSameCol}>
                <p className="paragraph">
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
            <div>
                    <p className="paragraph">
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
            </div>
            </div>

            <button className="readMore"><Link href='/about'>Read more</Link></button>
        </div>
    )
}