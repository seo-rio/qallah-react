import React from 'react';
import { Link } from 'react-router-dom';

const ByOtherList = () => {
    return (
<section class="sections">
              <div class="sections-overlay">
                    <div class="list-container byother-list-container">
                        <div class="move-wrap">
                            <div class="list-page-count">5/5</div>
                            <Link class="move move-pre" to='/questionbyothers/start'>
                                <i class="fas fa-chevron-left fa-3x"></i>
                            </Link>
                            <Link class="move move-next" to='/questionbyothers/done'>
                                <i class="fas fa-chevron-right fa-3x"></i>
                            </Link>
                    </div>
                    <div class="progress-on">
                        <div class="progress-bar" style={{width:'6%', backgroundColor: '#9e8d5e'}}></div>
                    </div>
                    <div class="byother-qna">
                        <div class="byother-question-field">
                            <div class="byother-question-num">013.&nbsp;</div>
                            <div class="byother-question-title">
                                자신은 미래에 어떤 사람이 될 것인가요?
                            </div>
                        </div>
                        <div class="byother-answer-field">
                            <input class="answer-input" type="text" />
                            <i class="fas fa-trash"></i>
                        </div>
                        <div class="answer-add-btn">
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>
                  </div>
              </div>
          </section>
    );
}

export default ByOtherList;