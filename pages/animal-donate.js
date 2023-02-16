import Layout from '../components/layout.js';
import DonorBox from '../components/DonorBox.js';


export default function AnimalDonate({animal}) {

    return (
        <Layout>
            <div>
                <p>Animal Donate content. </p>
                <p>Into this page you will get through Link from the MAP. As a props is passed "animal", and according to that photo and text will change, otherwise there will be the same donor box.</p>
        
               

                <p>Depends on Rodrigo - <br/>
                1. could be only /donate page, which will be looking differently according to from where you are going to this page, 
                that means the content will be changing accordig to from which link you are going to this page OR 
                <br /> 2. it will be special /animal-donate, which 
                will be only for the animals, changing according to which animal you clicked on the map OR 
                <br /> 3. every animal will be having their own page like
                 icf.earth/elephant-donate, /zebra-donate,... so then you can share the link anywhere - on social media </p>

                <DonorBox />
            </div>
        </Layout>
    )
}