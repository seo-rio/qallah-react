import React from "react"
import { Link, Route } from 'react-router-dom';

const ToMeDone = ({
    match
}) => {
    return(
        <section class="sections answer-section">
            <div class="sections-overlay">
                <div class="q-main-container tome-container">
                    <div class="q-main-header tome-header">
                        <h2>내가 보는 나</h2>
                    </div>
                    <div class="q-main-content tome-content">
                        <div>답변이 완료되었습니다.</div>
                    </div>
                    <div class="q-main-footer tome-footer">
                        <div class="tome-start">
                            <Link to="/questiontome">
                                <i class="fas fa-play fa-2x"></i>
                            </Link>
                            <div class="tome-label start-label">답변 시작</div>
                        </div>
                        <div class="tome-home">
                            <Link to="/">
                                <i class="fas fa-home fa-2x"></i>
                            </Link>
                            <div class="tome-label home-label">메인 홈</div>
                        </div>
                        <div class="tome-history">
                            {console.log(match)}
                            <Link to={`/questiontome/history`}>
                                <i class="fas fa-history fa-2x"></i>
                            </Link>
                            <div class="tome-label history-label">과거 답변</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ToMeDone;