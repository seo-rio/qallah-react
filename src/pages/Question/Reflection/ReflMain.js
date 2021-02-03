import React from 'react';
import { Link } from 'react-router-dom';

const ReflMain = ({
    match
}) => {
    return (
        <section class="sections">
            <div class="sections-overlay">
                <div class="q-main-container refl-container">
                    <div class="q-main-header refl-header">
                        <h2>성찰</h2>
                        <p>
                        : 마음속으로 깊이 반성하여 살피는 것
                        </p>
                    </div>
                    <div class="q-main-content refl-content">
                        <div>- 하루에 최대 3 질문</div>
                        <div>- 이 페이지의 핵심은 사람이 살아가면서 마주하는 결정적 질문들을 모아둔 것, 그 질문에 대한 답변들을 '쌓는것',</div>
                        <div>- 이전 답변들을 기록해놓고 시간의 흐름대로 나의 변화를 볼 수 있는 것</div>
                        <div>- 그러기 위해선 사용자의 꾸준한 참여와 진실 어린 답변이 필요하다</div>
                    </div>
                    <div class="q-main-footer refl-footer">
                        <div class="refl-start">
                            <Link class="nav-btn btn-start" to={`${match.url}/start`}>
                                <i class="fas fa-play fa-2x"></i>
                            </Link>
                            <div class="start-label">답변시작</div>
                        </div>
                        <div class="refl-home">
                            <Link class="nav-btn btn-home" to='/'>
                                <i class="fas fa-home fa-2x"></i>
                            </Link>
                            <div class="home-label">메인 홈</div>
                        </div>
                        <div class="refl-history">
                            <Link class="nav-btn btn-history" to={`${match.url}/history`}>
                                <i class="fas fa-history fa-2x"></i>
                            </Link>
                            <div class="history-label">과거 답변</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReflMain;