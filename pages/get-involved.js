import Layout from '../components/layout.js';
import DonorBox from '../components/DonorBox.js';
import Form from '../components/Form.js';
import ImpactShop from '../components/ImpactShop.js';
import * as contentful from "contentful";


export default function GetInvolved({text, form}) {

    return (
        <Layout pageTitle='ICF Get Involved'>
            <div className='container'>

            
        
                <div className='firstComponentOnPage'>
                    <div  className="headingForSections centeredWithLeave">
                        <span className="headingLeave orangeLeave centerLeave"></span>
                        <h3>Get involved<span className="headingRedDot">.</span></h3>
                    </div>
                </div>

                <div className='articleComponent pictureBkg'><DonorBox getInvolved text={text}/></div>
                <div className='articleComponent'><Form form={form}/></div>
                <div className='articleComponent bkgBeigeComponent whiteStripeMd'><ImpactShop /></div>


            </div>
        </Layout>
    )
}


export async function getStaticProps() {
    
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE, //space ID
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, //credentials to access the data
    })
  
   
  
    const getInvolved = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_GETINVOLVED);


  
    return {
      props: {
  
            text: getInvolved.fields.donationDescription,
            form: getInvolved.fields.formDescription
  
      }, 
    }
  }
  