import heroStyles from './heroSection.module.css';


export default function HeroSection() {

    return(
        <div>
            <video className={heroStyles.heroVideo} src='../videos/lion-placeholder.mp4' autoPlay loop muted />
            <p className={heroStyles.heroSectionTest}>test heroSection.module.css</p>
        </div>
    )
}