


export default function MeetTheTeam() {

    const toggleActiveClass = () => {
            const gridOne = document.querySelector("#gridOne");
            const gridTwo = document.querySelector("#gridTwo");

            gridOne.classList.toggle('active');
            gridTwo.classList.toggle('active');

            const arrowLeft = document.querySelector('.arrow_left');
            const arrowRight = document.querySelector('.arrow_right');

            arrowLeft.classList.toggle('active');
            arrowRight.classList.toggle('active');
            
    }

    return(
        <div className="contentWidth">
            <div  className="headingForSections centeredText">
                <h3>Meet the Team<span className="headingRedDot">.</span></h3>
                <span className="subHeadingDown">Sentence about the team that makes this mission happen</span>
            </div>
            
            <div className="meetTheTeamGridContainer">
                <div className="arrow arrow_left" onClick={()=>{toggleActiveClass()}}></div>
                <div className="arrow arrow_right active" onClick={()=>{toggleActiveClass()}}></div>
           
                <div className="gridContainerInline">
                    <div className="meetTheTeamGrid centeredText active" id='gridOne'>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/17.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/17.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/17.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/17.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/17.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/17.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                    </div>

                    <div className="meetTheTeamGrid secondMeetTheTeamGrid centeredText" id='gridTwo'>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/15.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/15.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/15.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/15.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/15.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/15.png'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>Lorem ipsum dolores....</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}