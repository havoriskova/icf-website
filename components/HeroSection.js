import heroStyles from './heroSection.module.css';


export default function HeroSection() {

    return(
        <div className={heroStyles.containerHero}>
            <div className={heroStyles.headerContainer}>
                <h1 className={heroStyles.header}>Inspirational mission statement on what drives ICF.</h1>
                <h2 className={heroStyles.subHeader}>Supporting text on what we are trying to achieve with our organization, why it’s important what we do, why we need the support of donors etc. etc.</h2>
                <div className={heroStyles.buttons}>
                    <button className={`${heroStyles.buttonHero} kumbhSansSemiBold`}>Take action</button>
                    <button className={`${heroStyles.buttonHeroTwo} kumbhSansSemiBold`}>Learn more</button>
                </div>
            </div>
            <video className={heroStyles.heroVideo} src='../videos/lion-placeholder.mp4' autoPlay loop muted />
            
        </div>
    )
}