import React from "react"
import { Link, Route } from 'react-router-dom';

const ToMeHistory = () => {
    return(
        <section class="sections answer-section">
            <div class="sections-overlay">
                <div class="history-container tome-history-container">
                    {/* 아무 히스토리도 없을 때  */}
                        {/* <div class="history-overlay">
                        <div class="history-overlay-inner">
                            아직 작성된 답변이 없습니다.
                        </div>
                    </div>  */}
                    <div class="history-header">
                        <div class="history-home">
                            <a class="history-pre-btn" href="ToMeMain.html">
                                <i style={{color:"white"}} class="fas fa-chevron-left fa-2x"></i>
                            </a>                    
                        </div>
                        <div class="history-label">내가 보는 나</div>
                    </div>
                    {/* <div class="scroll-on">
                        <div class="scroll-bar" style={{width:"50%"}}></div>
                    </div> */}
                    <div class="history-elem-container">
                        <div class="history-elem">
                            <div class="star"></div>
                        </div>
                        <div class="history-elem">
                            <div class="bar"></div>
                            <div class="circle">
                                <div class="sub-circle"></div>
                            </div>
                        </div>
                        <div class="history-elem">
                            <div class="bar"></div>
                            <div class="circle">
                                <div class="sub-circle"></div>
                            </div>
                            <div class="history-desc">
                                <div class="history-desc-title">내가 보는 나</div>
                                <div class="history-desc-date">2020.07.01</div>
                            </div>
                        </div>
                        {/* <div class="history-elem">
                            <div class="bar"></div>
                            <div class="circle">
                                <div class="sub-circle"></div>
                            </div>
                        </div>
                        <div class="history-elem">
                            <div class="bar"></div>
                            <div class="circle">
                                <div class="sub-circle"></div>
                            </div>
                        </div>
                        <div class="history-elem">
                            <div class="bar"></div>
                            <div class="circle">
                                <div class="sub-circle"></div>
                            </div>
                        </div> */}
                        <div class="history-elem last">
                            <div class="bar"></div>
                            <div class="circle">
                                <div class="sub-circle"></div>
                            </div>
                            <div class="bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ToMeHistory;