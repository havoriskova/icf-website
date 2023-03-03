
import styles from '../styles/Home.module.css';
import Partnerships from '../components/Partnerships';
import Mission from '../components/Mission';
import MeetTheTeam from '../components/MeetTheTeam';
import HeroSection from '../components/HeroSection';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import OurStories from '../components/OurStories';
import Conserving from '../components/Conserving';

export default function Home() {
  return (
    <Layout home pageTitle='ICF Upemba Home'>
      <div className="container">
      

          {/* <p> Testing of CSS files: <br />
            <span className='globalsTest'> global</span>, 
            <span className={styles.homeTest}> home module</span>, 
            <span className={utilStyles.utilsTest}> utils</span>, 
            <span> layout - is functioning in the layout.js</span>, 
            <span className='text-success'> bootstrap</span>
          </p> */}


          {/* since the components bellow as HeroSection, Mission, MeetTheTeam,... are on multiple pages and their width can differentiate,
          their width will be 100%,
          and an actual width would be always set in the parent page component 
          - that means this HeroSection bellow will have its width set in Home.module.css  */}

          <div className='articleComponent'><HeroSection /></div> 
          <div className='articleComponent gradientBkgComponent whiteStripe'><OurStories /></div>
          <div className={`articleComponent bkgWhiteComponent ${utilStyles.halfWidth}`} ><Mission /></div>
          <div className={`articleComponent bkgWhiteComponent ${utilStyles.halfWidth}`}><MeetTheTeam /></div>
          <div className='articleComponent gradientBkgComponent'><Partnerships /></div>
          <div className='articleComponent bkgWhiteComponent lastComponentOnPage'><Conserving /></div>


        
      </div>
    </Layout>
  )
}
