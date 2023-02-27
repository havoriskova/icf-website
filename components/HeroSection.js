import heroStyles from './heroSection.module.css';


export default function HeroSection() {

    return(
        <div className={heroStyles.containerHero}>
            <div className={heroStyles.headerContainer}>
                <h1 className={heroStyles.header}>Inspirational mission statement on what drives ICF.</h1>
                <h2 className={heroStyles.subHeader}>Lorem ipsum </h2>
                <button className={heroStyles.buttonHero}>Action 1</button>
                <button className={heroStyles.buttonHeroTwo}>Action 2</button>
            </div>
            <video className={heroStyles.heroVideo} src='../videos/lion-placeholder.mp4' autoPlay loop muted />
            
        </div>
    )
}