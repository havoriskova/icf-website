import Layout from '../components/layout.js';
import * as contentful from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function Transparency(props) {

    return (
        <Layout pageTitle='Transparency'>
            <div className='container'>

            
        
                    <div className='firstComponentOnPage'>
                            <div  className="headingForSections centeredWithLeave">
                                        <span className="headingLeave orangeLeave centerLeave"></span>
                                        <h3>Transparency<span className="headingRedDot">.</span></h3>
                            </div>
                    </div>

                    <div className='contentWidth'>
                        <div className='articleMargin paragraph'>
                            {documentToReactComponents(props.text)}
                        </div>
                    </div>

                    <div className='articleMargin centeredText lastComponentOnPage'>
                        <h4 className='kumbhSansSemiBold'>{props.downloadText}</h4>
                        
                        <button className='readMore inlineButton'><a>{props.buttonOne}</a></button>
                        <button className='readMore inlineButton'><a>{props.buttonTwo}</a></button>
                    </div>


            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE, //space ID
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, //credentials to access the data
    })
  
   
  
    const transparency = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_TRANSPARENCY);


  
    return {
      props: {
  
            text: transparency.fields.transparencyText,
            downloadText: transparency.fields.downloadSheetDescription,
            buttonOne: transparency.fields.buttonOne,
            buttonTwo: transparency.fields.buttonTwo

  
      }, 
    }
  }
  