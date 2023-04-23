


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
            {/* <div  className="headingForSections centeredText">
                <h3>Meet the Team<span className="headingRedDot">.</span></h3>
                <span className="subHeadingDown">{props.meetTheTeamSubheading}</span>
            </div> */}
            
            {/* <div className="meetTheTeamGridContainer">
        
           
                <div className="gridContainerRow">
                    <div className="meetTheTeamGrid centeredText active" id='gridOne'>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember1[0]}</b>
                                <div className="card__job">{props.teamMember1[1]}</div>
                                <div>{props.teamMember1[2]}</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember2[0]}</b>
                                <div className="card__job">{props.teamMember2[1]}</div>
                                <div>{props.teamMember2[2]}</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember3[0]}</b>
                                <div className="card__job">{props.teamMember3[1]}</div>
                                <div>{props.teamMember3[2]}</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember4[0]}</b>
                                <div className="card__job">{props.teamMember4[1]}</div>
                                <div>{props.teamMember4[2]}</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember5[0]}</b>
                                <div className="card__job">{props.teamMember5[1]}</div>
                                <div>{props.teamMember5[2]}</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember6[0]}</b>
                                <div className="card__job">{props.teamMember6[1]}</div>
                                <div>{props.teamMember6[2]}</div>
                            </div>
                        </div>

                    </div>

                    <div className="meetTheTeamGrid secondMeetTheTeamGrid centeredText" id='gridTwo'>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember7[0]}</b>
                                <div className="card__job">{props.teamMember7[1]}</div>
                                <div>{props.teamMember7[2]}</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember8[0]}</b>
                                <div className="card__job">{props.teamMember8[1]}</div>
                                <div>{props.teamMember8[2]}</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember9[0]}</b>
                                <div className="card__job">{props.teamMember9[1]}</div>
                                <div>{props.teamMember9[2]}</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember10[0]}</b>
                                <div className="card__job">{props.teamMember10[1]}</div>
                                <div>{props.teamMember10[2]}</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember11[0]}</b>
                                <div className="card__job">{props.teamMember11[1]}</div>
                                <div>{props.teamMember11[2]}</div>
                            </div>
                        </div>

                        <div className="card card-for-wider-screen">
                            <span className="card__img"><img alt='human' src='./images/pexels_portrait_2.jpg'/></span>
                            <div className="card__content">
                                <b>{props.teamMember12[0]}</b>
                                <div className="card__job">{props.teamMember12[1]}</div>
                                <div>{props.teamMember12[2]}</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="arrow arrow_left" onClick={()=>{toggleActiveClass()}}>
                    <svg className="arrowSvg" width="66" height="66">
                        <ellipse cx="33" cy="33" fill="#84a54b" stroke="#84a54b" strokeWidth="2" rx="30" ry="30" />
                        <path d="m 42.681584,33.69458 -14.14025,14.140163 c -0.68197,0.681967 -1.78761,0.681967 -2.46951,0 l -1.64923,-1.649203 c -0.68079,-0.680852 -0.6821,-1.784279 -0.003,-2.466652 L 35.626034,32.459732 24.419654,21.200739 c -0.6792,-0.682403 -0.67789,-1.78579 0.003,-2.46659 l 1.64921,-1.649224 c 0.68197,-0.681968 1.78761,-0.681968 2.46951,0 l 14.14014,14.140162 c 0.68197,0.681867 0.68197,1.787526 1.1e-4,2.469493 z" fill="#ffffff"/>
                    </svg>
                </div>
                <div className="arrow arrow_right active" onClick={()=>{toggleActiveClass()}}>
                    <svg className="arrowSvg" width="66" height="66">
                        <ellipse cx="33" cy="33" fill="#84a54b" stroke="#84a54b" strokeWidth="2" rx="30" ry="30" />
                        <path d="m 42.681584,33.69458 -14.14025,14.140163 c -0.68197,0.681967 -1.78761,0.681967 -2.46951,0 l -1.64923,-1.649203 c -0.68079,-0.680852 -0.6821,-1.784279 -0.003,-2.466652 L 35.626034,32.459732 24.419654,21.200739 c -0.6792,-0.682403 -0.67789,-1.78579 0.003,-2.46659 l 1.64921,-1.649224 c 0.68197,-0.681968 1.78761,-0.681968 2.46951,0 l 14.14014,14.140162 c 0.68197,0.681867 0.68197,1.787526 1.1e-4,2.469493 z" fill="#ffffff"/>
                    </svg>
                </div>
            </div> */}
        </div>
    )
}