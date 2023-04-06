import Layout from '../components/layout.js';
import DonorCrypto from '../components/DonorCrypto.js';
import GetInvolvedNotFancyLink from '../components/getInvolvedNotFancyLink.js';


export default function DonateCrypto() {

    return (
        <Layout>
            <div className='container'>
                
            
        
                <div className='firstComponentOnPage'>
                    <div  className="headingForSections centeredWithLeave">
                            <span className="headingLeave orangeLeave centerLeave"></span>
                            <h3>Donate in crypto<span className="headingRedDot">.</span></h3>
                    </div>
                </div>


                <div className='pictureBkg'> <DonorCrypto /> </div>
                <div className='lastComponentOnPage'><GetInvolvedNotFancyLink /></div>

            </div>
        </Layout>
    )
}