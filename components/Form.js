import { useRef } from 'react';


export default function Form() {

   //Mailchimp API documentation -> generate an API key.
   //list ID in the Mailchimp dashboard by going to Audience > Manage Audience > Settings > List name and defaults

        const inputRefEmail = useRef(null);
        const inputRefFname = useRef(null);

        // Handle the form submission
        const subscibeUser = async (e) => {

            e.preventDefault();

            const fullName = inputRefFname.current.value;
            const [firstName, lastName] = fullName.split(" ");

            console.log('submited form', firstName, lastName, inputRefEmail.current.value);

            // try {  
            //     const res = await fetch('/api/subscribeUser', {
            //         body: JSON.stringify({
            //             email: inputRefEmail.current.value,
            //         }),
            
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            
            //         method: 'POST',
            //     });
            // } catch (err) {
            //     console.log(err);
            //     console.log(err.response.data.error);
            //     alert("Error subscribing. Please try again later.");
            // }
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
                    <span className="subHeadingDown">Stay in the know</span>
                </div>

                <div className="row kumbhSansSemiBold">
                    <div>
                        <p>Text about what people are subscribing for and how many times they will get e-mails. 
                        They can always unscubscribe again whenever they want!</p>
                    </div>

                    <div>
                        <form onSubmit={subscibeUser}>
                            <label htmlFor='fullName'>Full name</label>
                            <input id="fullName" name="fname" ref={inputRefFname}></input>
                            
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