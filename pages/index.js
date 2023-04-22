
// import styles from '../styles/Home.module.css';
import Partnerships from '../components/Partnerships';
import Mission from '../components/Mission';
import MeetTheTeam from '../components/MeetTheTeam';
import HeroSection from '../components/HeroSection';
import Layout from '../components/layout';
// import utilStyles from '../styles/utils.module.css';
import OurStories from '../components/OurStories';
import Conserving from '../components/Conserving';


//const contentful = require(`contentful`); funguje, ale je prej lepsi pouzit import metodu, tj:
import * as contentful from "contentful";

// console.log(contentful);


export default function Home(props) {
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

          <div className='articleComponent'><HeroSection props={props.heroSection}/></div> 
          <div className='articleComponent gradientBkgComponent whiteStripe'><OurStories props={props.ourStories}/></div>
          <div className='articleComponent' ><Mission props={props.mission} /></div>
          <div className='articleComponent bkgBeigeComponent whiteStripe'><MeetTheTeam props={props.meetTheTeam}/></div>
          <div className='articleComponent'><Partnerships /></div>
          <div className='articleComponent lastComponentOnPage'><Conserving /></div>


        
      </div>
    </Layout>
  )
}



export async function getStaticProps() {
    
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE, //space ID
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, //credentials to access the data
  })

//  const res = await client.getEntries({ content_type: 'blog post'});
//  console.log(res); --> ze bych ty vsechny entries hodila do samostatnyho js souboru, a z _app.js to pak rozhodila, nebo ty props z contentful hodila celkove vsude???

  const homepage = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_HOMEPAGE);

  // client.getEntry(process.env.CONTENTFUL_ENTRY_ID_HOMEPAGE).then(function (entry) 
  //   {console.log(entry.sys);
  //     console.log(entry.fields.heroTitle)
  // });

  //console.log(homepage.fields);

  //return {props: {...homepage.fields}} -> a tim mi vznikne objekt, kde je vsechno

  //console.log(homepage.fields.achievement1[0]);

  return {
    props: {
      heroSection: {
        heroTitle: homepage.fields.heroTitle,
        heroDescription: homepage.fields.heroDescription,
      },

      ourStories: {
        ourStoryParagraphs: homepage.fields.ourStoryParagraphs
      },
              
      mission: {
        achievement1: homepage.fields.achievement1, //array ze dvou
        achievement2: homepage.fields.achievement2,
        achievement3: homepage.fields.achievement3,
        achievement4: homepage.fields.achievement4,
      },
      
      meetTheTeam: {
        meetTheTeamSubheading: homepage.fields.meetTheTeamSubheading,
        teamMember1: homepage.fields.teamMember1, //array ze tri
              //teamMember1Photo: homepage.teamMember1Photo
      }

    }, 
  }
}