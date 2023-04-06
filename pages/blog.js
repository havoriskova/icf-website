import Layout from '../components/layout.js';
import StoriesGrid from '../components/StoriesGrid.js';
import Link from 'next/link';


export default function Stories() {

    return (
        <Layout pageTitle='ICF Stories'>
            <div className='container'>

                <div className='firstComponentOnPage'>  
                    <div  className="headingForSections centeredWithLeave">
                            <span className="headingLeave orangeLeave centerLeave"></span>
                            <h3>Our stories<span className="headingRedDot">.</span></h3>
                    </div>
                    <div className="subHeadingDown centeredText">Read about our stories written by us</div>
                </div>

                <div className='articleComponent bkgBeigeComponent'><StoriesGrid /></div>

                <div className='contentWidth lastComponentOnPage kumbhSansSemiBold'>
                    <p className='centeredText'>Want to contribute to our mission? Learn how you can get involved</p>
                    <button className='readMore accentColor'><Link href='/get-involved'>Get Involved</Link></button>
                </div>
            
           
            </div>
        </Layout>
    )
}