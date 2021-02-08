import React from 'react';
import { Link } from 'react-router-dom';

const ReflDone = () => {
    return (
        <section class="sections">
            <div class="sections-overlay">
                <div class="q-main-container ref-container">
                    <div class="q-main-header refl-header">
                        <h1>성찰</h1>
                        <p>
                            마음속으로 깊이 반성하여 살피는 것
                        </p>
                    </div>
                    <div class="q-main-content refl-content">
                        <div class="">
                            답변이 완료되었습니다.
                        </div>
                    </div>
                    <div class="q-main-footer refl-footer">
                        <div class="refl-start">
                            <Link to='/reflection'>
                                <i class="fas fa-play fa-2x"></i>
                            </Link>
                            <div class="refl-label start-label">답변 시작</div>
                            
                        </div>
                        <div class="refl-home">
                            <Link to='/'>
                                <i class="fas fa-home fa-2x"></i>
                            </Link>
                            <div class="refl-label home-label">메인 홈</div>
                        </div>
                        <div class="refl-history">
                            <Link to='reflection/history'>
                                <i class="fas fa-history fa-2x"></i>
                            </Link>
                            <div class="refl-label history-label">과거 답변</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReflDone;