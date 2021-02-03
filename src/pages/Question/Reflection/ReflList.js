import React from 'react';
import { Link } from 'react-router-dom';

const ReflList = () => {
    return (
        <section class="sections">
            <div class="sections-overlay">
                <div class="refl-question-container">
                    <div class="move-wrap">
                        <div class="list-page-count"></div>
                        <Link class="move move-pre" to="/reflection">
                            <i class="fas fa-chevron-left fa-3x"></i>
                        </Link>
                        <Link class="move move-next" to="/reflection/done">
                            <i class="fas fa-chevron-right fa-3x"></i>
                        </Link>
                    </div>
                    <div class="progress-on refl-progress">
                        <div class="progress-bar" style={{width:"6%", backgroundColor: "#7b5e9e"}}></div>
                    </div>
                    <div class="refl-qna">
                        <div class="refl-question-field">
                            <div class="refl-question-title">내가 행복하다면, 혹은 행복하지 않다면 그 이유는?</div>
                            <div class="answer-log">이전 답변 0</div>
                        </div>
                    </div>            
                </div>
                <div class="refl-answer-container"> 
                    <textarea class="input-refl-answer" cols="100%" rows="20"></textarea>
                </div>
            </div>
     </section>
    );
}

export default ReflList;