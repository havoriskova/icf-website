import Layout from '../../components/layout.js';
import GetInvolvedFancyLink from '../../components/GetInvolvedFancyLink.js';
import RelatedStories from '../../components/RelatedStories.js';
import BlogPost from '../../components/BlogPost.js';

export default function BlogPostSlug() {

    return (
        <Layout pageTitle='Blog post'>
            <div className='container'>
                
                <div className='firstComponentOnPage'>  
                    <div  className="headingForSections centeredWithLeave">
                            <span className="headingLeave orangeLeave centerLeave"></span>
                            <h3>Our stories<span className="headingRedDot">.</span></h3>
                    </div>
                </div>

                <div className='articleComponent'><BlogPost /></div> {/* do blog postu posilat jako props ten text z Contentful - nechat tady jen slug, a zbytek blog-postu VYMAZAT*/}

                <div className='articleComponent bkgBeigeComponent'><RelatedStories /></div>

                <div className='articleComponent lastComponentOnPage'><GetInvolvedFancyLink imageStyle='OneImageLeaveShaped' /></div>
                
            </div>
        </Layout>
    )
}