import React from 'react';
import { Link } from 'react-router-dom';

const ReflHistory = () => {
    return (
        <section class="sections">
            <div class="sections-overlay">
                <div class="refl-history-container">
    {/* 아무 히스토리도 없을 때 */}
                {/* <div class="overlay">
                    <div class="overlay-inner">
                        아직 작성된 답변이 없습니다.
                    </div>
                </div>  */}
                <div class="home">
                    <Link class="history-pre-btn" to='/reflection'>
                        <i class="fas fa-chevron-left fa-2x"></i>
                    </Link>
                </div>
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

export default ReflHistory;