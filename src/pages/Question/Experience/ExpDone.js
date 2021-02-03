import React from 'react';
import { Link } from 'react-router-dom';

const ExpDone = () => {
    return (
        <section class="sections">
            <div class="sections-overlay">
                <div class="q-main-container xpr-done-container">
                    <div class="q-main-header expr-done-title">
                        <h2>내가 한 경험</h2>
                    </div>
                    <div class="q-main-content">
                        <div class="expr-done-text">
                            경험이 저장되었습니다.
                        </div>
                    </div>
                <div class="q-main-footer expr-done-btns">
                    <div class="expr-start">
                        <Link to="/experience">
                            <i class="fas fa-play fa-2x"></i>
                        </Link>
                        <div class="tome-label start-label">경험 추가</div>
                    </div>
                    <div class="tome-home">
                        <Link to="/">
                            <i class="fas fa-home fa-2x"></i>
                        </Link>
                        <div class="tome-label home-label">메인 홈</div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default ExpDone;