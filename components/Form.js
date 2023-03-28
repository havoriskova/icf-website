
export default function Form() {

    const API_KEY = "9787ece5d9d7bbd01e86df6fdbe2c9af-us10"; //Go to the Mailchimp API documentation and follow the instructions to generate an API key.
    const LIST_ID = "4f257b6944"; //You can find your list ID in the Mailchimp dashboard by going to Audience > Manage Audience > Settings > List name and defaults.

        // Handle the form submission
        function handleFormSubmit(e) {

            e.preventDefault();

            console.log('submited form');

            const email = document.getElementById("email").value;
            const fullName = document.getElementById("fullName").value;

            const [firstName, lastName] = fullName.split(" ");

            console.log(email, firstName, lastName);

            // Call the Mailchimp API to add the subscriber to the list
            fetch(`https://us7.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
                method: "POST",
                headers: {
                Authorization: `apikey ${API_KEY}`,
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
                }),
            })
                .then((response) => {
                if (response.ok) {
                    alert("Thanks for subscribing!");
                } else {
                    alert("Error subscribing. Please try again later.");
                }
                })
                .catch((error) => {
                console.error(error);
                alert("Error subscribing. Please try again later.");
                });
        }


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
                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor='fullName'>Full name</label>
                            <input id="fullName"></input>
                            
                            <label htmlFor='email'>E-mail address</label>
                            <input id="email" type='email'></input>

                            <button type='submit' className="readMore">Join</button>

                        </form>

                    </div>


                </div>

                

                
        </div>
    )
}