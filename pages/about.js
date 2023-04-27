import Layout from '../components/layout.js';
import Founding from '../components/Founding.js';
import Mission from '../components/Mission';
import MeetTheTeam from '../components/MeetTheTeam.js';
import Projects from '../components/Projects';
//import utilStyles from '../styles/utils.module.css';
import GetInvolvedFancyLink from '../components/GetInvolvedFancyLink.js';
import * as contentful from "contentful";


export default function About(props) {

    //console.log('zkouska', props.mission.achievement1);

    
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
                    
                <div className='articleComponent gradientBkgComponent'><Founding props={props.article}/></div> {/*  */}
                <div className='articleComponent' ><Mission props={props.mission}/></div> 
                <div className='articleComponent'><MeetTheTeam props={props.meetTheTeam}/></div> 
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

    const homepage = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_HOMEPAGE);

  
   // console.log(aboutPage);

  
    return {
      props: {
        title: aboutPage.fields.title,
        subtitle: aboutPage.fields.subtitle,
        article: aboutPage.fields.whyWeStartedParagraphs,

        mission: {
            achievement1: homepage.fields.achievement1, //array ze dvou
            achievement2: homepage.fields.achievement2,
            achievement3: homepage.fields.achievement3,
            achievement4: homepage.fields.achievement4,
            achievement1photo: homepage.fields.achievement1photo,
            achievement2photo: homepage.fields.achievement2photo,
            achievement3photo: homepage.fields.achievement3photo,
            achievement4photo: homepage.fields.achievement4photo
    
          },
          
          meetTheTeam: {
            meetTheTeamSubheading: homepage.fields.meetTheTeamSubheading,
            teamMember1: homepage.fields.teamMember1, //array ze tri
            teamMember2: homepage.fields.teamMember2,
            teamMember3: homepage.fields.teamMember3,
            teamMember4: homepage.fields.teamMember4,
            teamMember5: homepage.fields.teamMember5,
            teamMember6: homepage.fields.teamMember6,
            teamMember7: homepage.fields.teamMember7,
            teamMember8: homepage.fields.teamMember8,
            teamMember9: homepage.fields.teamMember9,
            teamMember10: homepage.fields.teamMember10,
            teamMember11: homepage.fields.teamMember11,
            teamMember12: homepage.fields.teamMember12,
            teamMember1Photo: homepage.fields.teamMember1Photo,
            teamMember2Photo: homepage.fields.teamMember2Photo,
            teamMember3Photo: homepage.fields.teamMember3Photo,
            teamMember4Photo: homepage.fields.teamMember4Photo,
            teamMember5Photo: homepage.fields.teamMember5Photo,
            teamMember6Photo: homepage.fields.teamMember6Photo,
            teamMember7Photo: homepage.fields.teamMember7Photo,
            teamMember8Photo: homepage.fields.teamMember8Photo,
            teamMember9Photo: homepage.fields.teamMember9Photo,
            teamMember10Photo: homepage.fields.teamMember10Photo,
            teamMember11Photo: homepage.fields.teamMember11Photo,
            teamMember12Photo: homepage.fields.teamMember12Photo,
          }
      }, 
    }
  }