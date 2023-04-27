import Layout from '../components/layout.js';
import StoriesGrid from '../components/StoriesGrid.js';
import Link from 'next/link';
import * as contentful from "contentful";


export default function Stories(props) {

    return (
        <Layout pageTitle='ICF Stories'>
            <div className='container'>

                <div className='firstComponentOnPage'>  
                    <div  className="headingForSections centeredWithLeave">
                            <span className="headingLeave orangeLeave centerLeave"></span>
                            <h3>Our stories<span className="headingRedDot">.</span></h3>
                    </div>
                    <div className="subHeadingDown centeredText">Read about our stories written by us</div>
                </div>

                <div className='articleComponent bkgBeigeComponent'><StoriesGrid props={props}/></div>

                <div className='articleComponent lastComponentOnPage'>
                    <div className='contentWidth kumbhSansSemiBold'>
                        <p className='centeredText'>Want to contribute to our mission? Learn how you can get involved</p>
                        <button className='readMore accentColor'><Link href='/get-involved'>Get Involved</Link></button>
                    </div>
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
  
   
  
    const blogOne = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_BLOG1);
    const blogTwo = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_BLOG2);
    const blogThree = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_BLOG3);
    const blogFour = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_BLOG4);
    const blogFive = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_BLOG5);
    const blogSix = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_BLOG6);


  
    return {
      props: {
  
            blogOne: {
                title: blogOne.fields.title,
                authorDate: blogOne.fields.authorAndDate,
                summary: blogOne.fields.summary,
                blogArticle: blogOne.fields.blogArticle
            },

            blogTwo: {
                title: blogTwo.fields.title,
                authorDate: blogTwo.fields.authorAndDate,
                summary: blogTwo.fields.summary,
                blogArticle: blogTwo.fields.blogArticle
            },

            blogThree: {
                title: blogThree.fields.title,
                authorDate: blogThree.fields.authorAndDate,
                summary: blogThree.fields.summary,
                blogArticle: blogThree.fields.blogArticle
            },

            blogFour: {
                title: blogFour.fields.title,
                authorDate: blogFour.fields.authorAndDate,
                summary: blogFour.fields.summary,
                blogArticle: blogFour.fields.blogArticle
            },

            blogFive: {
                title: blogFive.fields.title,
                authorDate: blogFive.fields.authorAndDate,
                summary: blogFive.fields.summary,
                blogArticle: blogFive.fields.blogArticle
            },


            blogSix: {
                title: blogSix.fields.title,
                authorDate: blogSix.fields.authorAndDate,
                summary: blogSix.fields.summary,
                blogArticle: blogSix.fields.blogArticle
            },



  
      }, 
    }
  }
  