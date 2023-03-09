
export default function Form() {

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
                        <form>
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