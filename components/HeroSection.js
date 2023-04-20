import heroStyles from './heroSection.module.css';


export default function HeroSection({props}) {

    return(
        <div className={heroStyles.containerHero}>
            <div className={heroStyles.headerContainer}>
                <h1 className={heroStyles.header}>{props.heroTitle}</h1>
                <h2 className={heroStyles.subHeader}>{props.heroDescription}</h2>
                <div className={heroStyles.buttons}>
                    <button className={`${heroStyles.buttonHero} kumbhSansSemiBold`}>Take action</button>
                    <button className={`${heroStyles.buttonHeroTwo} kumbhSansSemiBold`}>Learn more</button>
                </div>
            </div>
            <video className={heroStyles.heroVideo} src='../videos/lion-placeholder.mp4' autoPlay loop muted />
            
        </div> 
    )
}

