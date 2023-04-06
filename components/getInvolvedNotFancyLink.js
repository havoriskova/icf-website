import Link from 'next/link';


export default function GetInvolvedNotFancyLink() {
    return(
        <div className="contentWidth kumbhSansSemiBold">
            
            <div className="headingForSections centeredText">
                    <h3>More ways to get involved<span className="headingRedDot">.</span></h3>
            </div>

            <button className='readMore'><Link href='/get-involved'>Read more</Link></button>

        </div>

    )
}