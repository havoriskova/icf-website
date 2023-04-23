import Link from 'next/link';

export default function Mission({props}) {

    console.log(props['achievement1']); //obj["a"] is equivalent to obj.a
    console.log(props.achievement1);
    // console.log(props.achievement1);

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
                        <div><b>{props['achievement1'][0]}</b></div>
                        <div className="mission-small-text">{props['achievement1'][1]}</div>
                    </div>
                </div>

                <div className="mission-small">
                    <div className="mission-small-picture"><img alt='two' src='./images/pexels_nature.jpg'/></div>
                    <div>
                        <div><b>{props.achievement2[0]}</b></div>
                        <div className="mission-small-text">{props.achievement2[1]}</div>
                    </div>
                </div>

                <div className="mission-small">
                    <div className="mission-small-picture"><img alt='three' src='./images/pexels_nature.jpg'/></div>
                    <div>
                        <div><b>{props.achievement3[0]}</b></div>
                        <div className="mission-small-text">{props.achievement3[1]}</div>
                    </div>
                </div>

                <div className="mission-small">
                    <div className="mission-small-picture"><img alt='four' src='./images/pexels_nature.jpg'/></div>
                    <div>
                        <div><b>{props.achievement4[0]}</b></div>
                        <div className="mission-small-text">{props.achievement4[1]}</div>
                    </div>
                </div>
            </div>
        
            
            <button className="readMore"><Link href='/about/our-work'>Explore our impact</Link></button>
        </div>
    )
}