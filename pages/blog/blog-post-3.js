import Layout from '../../components/layout.js';

export default function BlogPostThree() {

    return (
        <Layout pageTitle='Blog post'>
            <div className='container'>
                <div className='firstComponentOnPage'>  
                    <div  className="headingForSections centeredWithLeave">
                            <span className="headingLeave orangeLeave centerLeave"></span>
                            <h3>Our stories<span className="headingRedDot">.</span></h3>
                    </div>
                </div>

                <div>blog post 3</div>

            </div>
        </Layout>
    )
}