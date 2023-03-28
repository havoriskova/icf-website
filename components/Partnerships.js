import Link from 'next/link';

export default function Partnerships() {

    return(
        <div className="contentWidth">
            <div className='headingForSections centeredText'>
                <h3>Our partners<span className='headingRedDot'>.</span></h3>
            </div>
            Alliance and Partnerships component
           
            <button className="readMore"><Link href='/partners'>Read more</Link></button>
            
        </div>
    )
}