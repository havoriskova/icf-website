


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
        
           
                <div className="gridContainerRow">
                    <div className="meetTheTeamGrid centeredText active" id='gridOne'>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Volunteer</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                    </div>

                    <div className="meetTheTeamGrid secondMeetTheTeamGrid centeredText" id='gridTwo'>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>John Smith</b>
                                <div className="card__job">Ranger</div>
                                <div>“Quote on what motivates them to help the cause”</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="arrow arrow_left" onClick={()=>{toggleActiveClass()}}>
                    <svg className="arrowSvg" width="66" height="66">
                        <ellipse cx="33" cy="33" fill="#84a54b" stroke="#84a54b" strokeWidth="5" rx="30" ry="30" />
                        <path d="m 42.681584,33.69458 -14.14025,14.140163 c -0.68197,0.681967 -1.78761,0.681967 -2.46951,0 l -1.64923,-1.649203 c -0.68079,-0.680852 -0.6821,-1.784279 -0.003,-2.466652 L 35.626034,32.459732 24.419654,21.200739 c -0.6792,-0.682403 -0.67789,-1.78579 0.003,-2.46659 l 1.64921,-1.649224 c 0.68197,-0.681968 1.78761,-0.681968 2.46951,0 l 14.14014,14.140162 c 0.68197,0.681867 0.68197,1.787526 1.1e-4,2.469493 z" fill="#ffffff"/>
                    </svg>
                </div>
                <div className="arrow arrow_right active" onClick={()=>{toggleActiveClass()}}>
                    <svg className="arrowSvg" width="66" height="66">
                        <ellipse cx="33" cy="33" fill="#84a54b" stroke="#84a54b" strokeWidth="5" rx="30" ry="30" />
                        <path d="m 42.681584,33.69458 -14.14025,14.140163 c -0.68197,0.681967 -1.78761,0.681967 -2.46951,0 l -1.64923,-1.649203 c -0.68079,-0.680852 -0.6821,-1.784279 -0.003,-2.466652 L 35.626034,32.459732 24.419654,21.200739 c -0.6792,-0.682403 -0.67789,-1.78579 0.003,-2.46659 l 1.64921,-1.649224 c 0.68197,-0.681968 1.78761,-0.681968 2.46951,0 l 14.14014,14.140162 c 0.68197,0.681867 0.68197,1.787526 1.1e-4,2.469493 z" fill="#ffffff"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}