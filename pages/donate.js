import Layout from '../components/layout.js';
import DonorBox from '../components/DonorBox.js';
import GetInvolvedNotFancyLink from '../components/getInvolvedNotFancyLink.js';


export default function Donate() {

    return (
        <Layout>
            <div className='container'>
                
            <div className='firstComponentOnPage'>  
                <div  className="headingForSections centeredWithLeave">
                        <span className="headingLeave orangeLeave centerLeave"></span>
                        <h3>Make a donation<span className="headingRedDot">.</span></h3>
                </div>
            </div>
        
            <div className='pictureBkg'>  <DonorBox /> </div>

            <div className='lastComponentOnPage'><GetInvolvedNotFancyLink /></div>
              
            </div>
        </Layout>
    )
}