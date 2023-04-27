import Layout from '../components/layout.js';
import DonorBox from '../components/DonorBox.js';
import GetInvolvedNotFancyLink from '../components/getInvolvedNotFancyLink.js';
import * as contentful from "contentful";


export default function Donate({text}) {

    //console.log(text);
    return (
        <Layout>
            <div className='container'>
                
            <div className='firstComponentOnPage'>  
                <div  className="headingForSections centeredWithLeave">
                        <span className="headingLeave orangeLeave centerLeave"></span>
                        <h3>Make a donation<span className="headingRedDot">.</span></h3>
                </div>
            </div>
        
            <div className='pictureBkg'>  <DonorBox text={text}/> </div>

            <div className='lastComponentOnPage'><GetInvolvedNotFancyLink /></div>
              
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE, //space ID
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, //credentials to access the data
    })
  
   
  
    const donate = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_DONATE);


  
    return {
      props: {
  
            text: donate.fields.donationDescription
  
      }, 
    }
  }
  