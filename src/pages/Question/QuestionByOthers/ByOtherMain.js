import React from 'react';
import { Link } from 'react-router-dom';

const ByOtherMain = ({
    match
}) => {
    return(
        <section class="sections byother-section">
            <div class="sections-overlay byother-overlay">
                <div class="q-main-container byother-container">
                    <div class="q-main-header byother-header">
                        <h2>남이 보는 나</h2>
                    </div>
                    <div class="q-main-content byother-content">
                        <div>예상 소요 시간 : 20분 ~ 1시간</div>
                        <div>질문 수 : 5</div>
                        <div>지금 곁에 있는 다른 이에게 '나'에 대해 질문하세요.</div>
                    </div>
                    <div class="q-main-footer byother-footer">
                        <div class="byother-start">
                            <Link to={`${match.url}/start`}>
                                <i class="fas fa-play fa-2x"></i>
                            </Link>
                            <div class="byotehr-label start-label">답변 시작</div>
                            
                        </div>
                        <div class="byother-home">
                            <Link to='/'>
                                <i class="fas fa-home fa-2x"></i>
                            </Link>
                            <div class="byother-label home-label">메인 홈</div>
                        </div>
                        <div class="byother-history">
                            <Link to={`${match.url}/history`}>
                                <i class="fas fa-history fa-2x"></i>
                            </Link>
                            <div class="byotehr-label history-label">과거 답변</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ByOtherMain;