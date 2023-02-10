import Layout from '../components/layout.js';
import DonorBox from '../components/DonorBox.js';


export default function AnimalDonate({animal}) {

    return (
        <Layout>
            <div>
                Into this page you will get through Link from the MAP

                As a props is passed "animal", and according to that photo and text will change, otherwise there will be the same donor box
        
                Animal Donate content

                <DonorBox />
            </div>
        </Layout>
    )
}