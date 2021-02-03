import React from "react"
import { Link, Route, Switch } from 'react-router-dom';

const ToMeMain = ({
    match
}) => {
    return(
        <section class="sections tome-section">
            <div class="sections-overlay tome-overlay">
                <div class="q-main-container tome-container">
                    <div class="q-main-header tome-header">
                        <h2>내가 보는 나</h2>
                    </div>
                    <div class="q-main-content tome-content">
                        <div>예상 소요 시간 : 20분 ~ 1시간</div>
                        <div>질문 수 : 13</div>
                        <div>'나' 자신에게 질문하는 시간을 가져보세요.</div>
                    </div>
                    <div class="q-main-footer tome-footer">
                        <div class="tome-start">
                            <Link to={`${match.url}/start`}>
                                <i class="fas fa-play fa-2x"></i>
                            </Link>
                            <div class="tome-label start-label">답변 시작</div>
                        </div>
                        <div class="tome-home">
                            <Link to ="/">
                                <i class="fas fa-home fa-2x"></i>
                            </Link>
                            <div class="tome-label home-label">메인 홈</div>
                        </div>
                        <div class="tome-history">
                            <Link to={`${match.url}/history`}>
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

export default ToMeMain;