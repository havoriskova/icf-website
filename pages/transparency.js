import Layout from '../components/layout.js';


export default function Transparency() {

    return (
        <Layout pageTitle='Transparency'>
            <div className='container'>

            
        
                    <div className='firstComponentOnPage'>
                            <div  className="headingForSections centeredWithLeave">
                                        <span className="headingLeave orangeLeave centerLeave"></span>
                                        <h3>Transparency<span className="headingRedDot">.</span></h3>
                            </div>
                    </div>

                    <div className='contentWidth'>
                        <p className='articleMargin'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    <div className='articleMargin centeredText lastComponentOnPage'>
                        <h4 className='kumbhSansSemiBold'>Sentence about downloading factsheets, etc</h4>
                        
                        <button className='readMore inlineButton'><a>Download 1</a></button>
                        <button className='readMore inlineButton'><a>Download 2</a></button>
                    </div>


            </div>
        </Layout>
    )
}