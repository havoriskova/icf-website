import Layout from '../components/layout.js';
import Founding from '../components/Founding.js';
import Mission from '../components/Mission';
import MeetTheTeam from '../components/MeetTheTeam.js';
import Projects from '../components/Projects';
//import utilStyles from '../styles/utils.module.css';
import GetInvolvedFancyLink from '../components/GetInvolvedFancyLink.js';
import * as contentful from "contentful";


export default function About(props) {

    
    return (
        <Layout pageTitle='ICF About'>
            <div className='container'>
                
                <div className='firstComponentOnPage'>
                        <div  className="headingForSections centeredWithLeave">
                
                            <h3 className='centeredText'>
                            <span className="headingLeave orangeLeave centerLeave centeredLeave_h3_span"></span>
                            <span className='centered_h3_span'>About ICF</span><span className="headingRedDot">.</span></h3>
                        </div>
                        <div className="subHeadingDown centeredText">Learn about who we are</div>
                </div>

                <div className="aboutHeroSection">
                        <img alt="elephants" src="/images/aboutEleph.png"></img>
                        <div className='aboutHeroSection_heading'>
                            <h4 className='gradientText'>{props.title}</h4>
                            <h5>{props.subtitle}</h5>
                        </div>
                </div>
                    
                <div className='articleComponent gradientBkgComponent'><Founding props={props.article}/></div> 
                <div className='articleComponent' ><Mission /></div>
                <div className='articleComponent'><MeetTheTeam /></div>
                <div className='articleComponent bkgBeigeComponent whiteStripe'><Projects /></div>
                <div className='articleComponent lastComponentOnPage'><GetInvolvedFancyLink imageStyle='circleWithLeaves' /></div>
            </div>
        </Layout>
    )
}


export async function getStaticProps() {

    
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

  
    const aboutPage = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_ABOUT);
  
    console.log(aboutPage);

  
    return {
      props: {
        title: aboutPage.fields.title,
        subtitle: aboutPage.fields.subtitle,
        article: aboutPage.fields.whyWeStartedParagraphs 
      }, 
    }
  }