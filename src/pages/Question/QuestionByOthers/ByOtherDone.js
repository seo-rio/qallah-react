import React from 'react';
import { Link } from 'react-router-dom';

const ByOtherDone = () => {
    return (
        <section class="sections">
            <div class="sections-overlay">
                <div class="q-main-container byother-container">
                    <div class="byother-header">
                        <h2>남이 보는 나</h2>
                    </div>
                    <div class="q-main-content byother-content">
                        <div class="byother-desc">답변이 완료되었습니다</div>
                    </div>
                    <div class="q-main-footer byother-footer">
                        <div class="byother-start">
                            <Link to='/questionbyothers'>
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
                            <Link to='/questionbyothers/history'>
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

export default ByOtherDone;