import React from 'react';
import { Link } from 'react-router-dom';

const ByOtherHistory = () => {
    return (
        <section class="sections answer-section">
            <div class="sections-overlay">
                <div class="history-container byother-history-container">
                    {/* <div class="history-overlay">
                        <div class="history-overlay-inner">
                            아직 작성된 답변이 없습니다.
                        </div>
                    </div> */}
                    <div class="history-header">
                        <div class="history-home">
                            <Link class="history-pre-btn" to='/questionbyothers'>
                                <i style={{color: 'white'}} class="fas fa-chevron-left fa-2x"></i>
                            </Link>                    
                        </div>
                        <div class="history-label">남이 보는 나</div>
                    </div>
                    {/* <div class="scroll-on">
                        <div class="scroll-bar" style="width:50%"></div>
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
                        </div>
                        <div class="history-elem">
                            <div class="bar"></div>
                            <div class="circle">
                                <div class="sub-circle"></div>
                            </div>
                        </div>
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

export default ByOtherHistory;