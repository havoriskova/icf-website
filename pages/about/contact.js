import Layout from '../../components/layout.js';
import GetInvolvedFancyLink from '../../components/GetInvolvedFancyLink.js';
import ContactComponent from '../../components/ContactComponent.js';


export default function Contact() {

    return (
        <Layout pageTitle='ICF Contact'>
            <div className='container'>
                <div className='firstComponentOnPage'></div>
           
                <div className='articleComponent bkgBeigeComponent whiteStripeContact'><ContactComponent/> </div>


            


                <div className='articleComponent lastComponentOnPage'><GetInvolvedFancyLink imageStyle='OneImageLeaveShaped' /></div>

            </div>
        </Layout>
    )
}