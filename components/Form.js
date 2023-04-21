import { useRef } from 'react';
import axios from 'axios';
//import mailchimp from '@mailchimp/mailchimp_marketing';


export default function Form() {

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

// const API_KEY = process.env.MAILCHIMP_API_KEY;
//const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;
// const SERVER_PREFIX = process.env.MAILCHIMP_API_SERVER;
                console.log('trying');
              

                // const client = mailchimp.setConfig({
                //     apiKey: process.env.MAILCHIMP_API_KEY,
                //     server: process.env.MAILCHIMP_API_SERVER,
                // });

                // const run = async () => {
                //     const response = await client.lists.getAllLists();
                //     console.log(response);
                // };

                // run();


                    const client = require("@mailchimp/mailchimp_marketing");

                    client.setConfig({
                        apiKey: process.env.MAILCHIMP_API_KEY,
                        server: process.env.MAILCHIMP_API_SERVER,
                    });

                    const run = async () => {
                    const response = client.ping.get();
                    console.log(response);
                    };

                    run();


                // async function callPing() {
                //     const response = await client.ping.get();
                //     console.log(response);
                // }
                  
                // callPing();

                // https://us13.api.mailchimp.com/3.0/ping

                

                //console.log(res.status);

                // if (res.status === 200) {
                //     alert('you are subscribed');
                // } else {
                //    alert('Sorry, something went wrong.')
                // }

            } catch (e) {
                console.log('catching');
                console.log(e);
                // console.log(err.response);
                alert("Error subscribing. Please try again later.");
            }
        };




            //-------zkouska ------

            // const client = require("@mailchimp/mailchimp_marketing");

            // client.setConfig({
            //   apiKey: "9787ece5d9d7bbd01e86df6fdbe2c9af-us10",
            //   server: "us10",
            // });
            
            // const run = async () => {
            //   const response = await client.lists.getAllLists();
            //   console.log(response);
            // };
            
            // run();


            
            //-------------


            // fetch(`https://us10.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
            //     method: "POST",
            //     headers: {
            //     Authorization: `apikey ${API_KEY}`,
            //     "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //     email_address: email,
            //     status: "subscribed",
            //     merge_fields: {
            //         FNAME: firstName,
            //         LNAME: lastName,
            //     },
            //     }),
            // })
            //     .then((response) => {
            //     if (response.ok) {
            //         alert("Thanks for subscribing!");
            //     } else {
            //         alert("Error subscribing. Please try again later.");
            //     }
            //     })
            //     .catch((error) => {
            //     console.error(error);
            //     alert("Error subscribing. Please try again later.");
            //     });



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
                        <p className='paragraph'>Text about what people are subscribing for and how many times they will get e-mails. 
                        They can always unscubscribe again whenever they want!</p>
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