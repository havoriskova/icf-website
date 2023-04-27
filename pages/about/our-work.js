import Layout from '../../components/layout.js';
import GetInvolvedFancyLink from '../../components/GetInvolvedFancyLink.js';
import TransparencyLink from '../../components/TransparencyLink.js';
import Map from '../../components/Map.js';
import * as contentful from "contentful";


export default function OurWork({text}) {

    //console.log(props);

    return (
        <Layout pageTitle='ICF Our Work'>
            <div className='container'>

                <div className='firstComponentOnPage'>
                        <div  className="headingForSections centeredWithLeave">
                            <h3 className='centeredText'>
                                <span className="headingLeave orangeLeave centerLeave centeredLeave_h3_span_two"></span>
                                <span className='centered_h3_span'>Our work</span><span className="headingRedDot">.</span>
                            </h3>
                        </div>
                        <div className="subHeadingDown centeredText">Learn about our contribution and impact</div>
                </div>


                <div className='articleComponent'><Map/></div>
                <div className='articleComponent'><TransparencyLink text={text}/></div>

                <div className='articleComponent lastComponentOnPage'><GetInvolvedFancyLink imageStyle='TwoImagesLeaveShaped' /></div>


            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE, //space ID
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, //credentials to access the data
    })
  
   
  
    const ourWork = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_OURWORK);


  
    return {
      props: {
  
            text: ourWork.fields.readAboutTransparency
  
      }, 
    }
  }
  