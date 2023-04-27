import Layout from '../../components/layout.js';
import * as contentful from "contentful";
import GetInvolvedFancyLink from '../../components/GetInvolvedFancyLink.js';
import RelatedStories from '../../components/RelatedStories.js';
import BlogPost from '../../components/BlogPost.js';

export default function BlogPostFive(props) {

    return (
        <Layout pageTitle='Blog post'>
            <div className='container'>
                <div className='firstComponentOnPage'>  
                    <div  className="headingForSections centeredWithLeave">
                            <span className="headingLeave orangeLeave centerLeave"></span>
                            <h3>Our stories<span className="headingRedDot">.</span></h3>
                    </div>
                </div>

                <div className='articleComponent'><BlogPost props={props} /></div> {/* do blog postu posilat jako props ten text z Contentful */}

                <div className='articleComponent bkgBeigeComponent'><RelatedStories /></div>

                <div className='articleComponent lastComponentOnPage'><GetInvolvedFancyLink imageStyle='OneImageLeaveShaped' /></div>

            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE, //space ID
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, //credentials to access the data
    })
  
   

    const blogFive = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID_BLOG5);

    return {
      props: {
  
                title: blogFive.fields.title,
                authorDate: blogFive.fields.authorAndDate,
                summary: blogFive.fields.summary,
                blogArticle: blogFive.fields.blogArticle
  
      }
    }
  }
  