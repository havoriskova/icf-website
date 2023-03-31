import Layout from '../components/layout.js';
import Founding from '../components/Founding.js';
import Mission from '../components/Mission';
import MeetTheTeam from '../components/MeetTheTeam.js';
import Projects from '../components/Projects';
//import utilStyles from '../styles/utils.module.css';
import GetInvolvedFancyLink from '../components/GetInvolvedFancyLink.js';


export default function About() {

    return (
        <Layout pageTitle='ICF About'>
            <div className='container'>
                
                <div className='firstComponentOnPage'>
                        <div  className="headingForSections centeredWithLeave">
                
                            <h3 className='centeredText'>
                            <span className="headingLeave orangeLeave centerLeave centeredLeave_h3_span"></span>
                            <span className='centered_h3_span'>About ICF</span><span className="headingRedDot">.</span></h3>
                            <span className="subHeadingDown centeredText">Learn about who we are</span>
                        </div>
                </div>

                <div className="aboutHeroSection">
                        <div className='aboutHeroSection_heading'>
                            <h4 className='gradientText'>INSPIRATIONAL MISSION STATEMENT ON WHAT DRIVES ICF.</h4>
                            <h5>Mission statement</h5>
                        </div>
                        <img alt="elephants" src="/images/aboutEleph.png"></img>
                </div>
                    
                <div className='articleComponent gradientBkgComponent'><Founding /></div> 
                <div className='articleComponent' ><Mission /></div>
                <div className='articleComponent'><MeetTheTeam /></div>
                <div className='articleComponent darkGreenBkgComponent whiteStripe'><Projects /></div>
                <div className='articleComponent lastComponentOnPage'><GetInvolvedFancyLink imageStyle='circleWithLeaves' /></div>
            </div>
        </Layout>
    )
}