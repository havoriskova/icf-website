import { useRef } from 'react';
import axios from 'axios';
//import mailchimp from '@mailchimp/mailchimp_marketing';


export default function Form({form}) {

   //Mailchimp API documentation -> generate an API key.
   //list ID in the Mailchimp dashboard by going to Audience > Manage Audience > Settings > List name and defaults

        const inputRefEmail = useRef(null);
        const inputRefFirstName = useRef(null);
        const inputRefLastName = useRef(null);

        // Handle the form submission
        const subscibeUser = async (e) => {

            e.preventDefault();

           // const fullName = inputRefFname.current.value;
           // const [firstName, lastName] = fullName.split(" ");
            const email =  inputRefEmail.current.value;
            const firstName = inputRefFirstName.current.value;
            const lastName = inputRefLastName.current.value;


            console.log('submited form', firstName, lastName, email);

            try {  

                console.log('trying');
                const request = axios.get('/api');
              

            

            } catch (e) {
                console.log('catching');
                console.log(e);
                // console.log(err.response);
                alert("Error subscribing. Please try again later.");
            }
        };


    return(
        <div className="contentWidth">


                <div className="headingForSections centeredText">
                    <h3>Other ways to get involved<span className="headingRedDot">.</span></h3>
                </div>
                <div className='headerMd centeredText orangeText'>
                    <h3>Stay in the know</h3>
                 </div>

                <div className="row kumbhSansSemiBold">
                    <div className='marginBottom'>
                        <p className='paragraph'>{form}</p>
                    </div>

                    <div>
                        <form onSubmit={subscibeUser}>
                            <label htmlFor='firstName'>First name</label>
                            <input id="firstName" name="fname" ref={inputRefFirstName}></input>

                            <label htmlFor='lastName'>Last name</label>
                            <input id="lastName" name="lname" ref={inputRefLastName}></input>
                            
                            <label htmlFor='email'>E-mail address</label>
                            <input id="email" type='email' name="email" ref={inputRefEmail} required autoCapitalize="off"
                            autoCorrect="off"></input>

                            <button type='submit' className="readMore"><a>Join</a></button>

                        </form>

                    </div>


                </div>

                

                
        </div>
    )
}