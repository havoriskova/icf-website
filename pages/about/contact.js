import Layout from '../../components/layout.js';
import GetInvolvedFancyLink from '../../components/GetInvolvedFancyLink.js';


export default function Contact() {

    return (
        <Layout pageTitle='ICF Contact'>
            <div className='container'>

           
                <div className='firstComponentOnPage'>
                    <div  className="headingForSections centeredWithLeave">
                        <span className="headingLeave orangeLeave centerLeave"></span>
                        <h3>contact us<span className="headingRedDot">.</span></h3>
                    </div>
                </div>


                <div className='articleComponent lastComponentOnPage'><GetInvolvedFancyLink imageStyle='OneImageLeaveShaped' /></div>

            </div>
        </Layout>
    )
}