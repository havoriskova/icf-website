import Layout from '../components/layout.js';
import DonorBox from '../components/DonorBox.js';
import Form from '../components/Form.js';
import ImpactShop from '../components/ImpactShop.js';


export default function GetInvolved() {

    return (
        <Layout pageTitle='ICF Get Involved'>
            <div className='container'>

            
        
                <div className='firstComponentOnPage'>
                    <div  className="headingForSections centeredWithLeave">
                        <span className="headingLeave orangeLeave centerLeave"></span>
                        <h3>Ways to get involved<span className="headingRedDot">.</span></h3>
                    </div>
                </div>

                <div className='articleComponent pictureBkg'><DonorBox /></div>
                <div className='articleComponent'><Form /></div>
                <div className='articleComponent bkgBeigeComponent whiteStripeMd'><ImpactShop /></div>


            </div>
        </Layout>
    )
}