import Layout from '../components/layout.js';
import Founding from '../components/Founding.js';
import Mission from '../components/Mission';
import MeetTheTeam from '../components/MeetTheTeam.js';
import Projects from '../components/Projects';
import utilStyles from '../styles/utils.module.css';


export default function About() {

    return (
        <Layout pageTitle='ICF About'>
            <div className='container'>

                
                <div className='articleComponent firstComponentOnPage'><Founding /></div> 
                <div className={`articleComponent ${utilStyles.halfWidth}`} ><Mission /></div>
                <div className={`articleComponent ${utilStyles.halfWidth}`}><MeetTheTeam /></div>
                <div className='articleComponent lastComponentOnPage'><Projects /></div>
            </div>
        </Layout>
    )
}