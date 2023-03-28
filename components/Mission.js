import Link from 'next/link';

export default function Mission() {

    return(
        <div className="contentWidth">
            <div className='headingForSections'>
                <span className="headingLeave orangeLeave"></span>
                <span className="subHeading">Since the beginning</span>
                <h3>what we've achieved<span className='headingRedDot'>.</span></h3>
            </div>

            <div className="two-four-grid mission">
                <div className="mission-small">
                    <div className="mission-small-picture"><img alt='one' src='./images/pexels_nature.jpg'/></div>
                    <div>
                        <div><b>+12%</b></div>
                        <div className="mission-small-text">of wildlife population growth</div>
                    </div>
                </div>

                <div className="mission-small">
                    <div className="mission-small-picture"><img alt='two' src='./images/pexels_nature.jpg'/></div>
                    <div>
                        <div><b>+1980 km</b></div>
                        <div className="mission-small-text">increased park area patrol covered to ensure preservation</div>
                    </div>
                </div>

                <div className="mission-small">
                    <div className="mission-small-picture"><img alt='three' src='./images/pexels_nature.jpg'/></div>
                    <div>
                        <div><b>+12%</b></div>
                        <div className="mission-small-text">of wildlife population growth</div>
                    </div>
                </div>

                <div className="mission-small">
                    <div className="mission-small-picture"><img alt='four' src='./images/pexels_nature.jpg'/></div>
                    <div>
                        <div><b>+12%</b></div>
                        <div className="mission-small-text">of wildlife population growth</div>
                    </div>
                </div>
            </div>
        
            
            <button className="readMore"><Link href='/about/our-work'>Explore our impact</Link></button>
        </div>
    )
}