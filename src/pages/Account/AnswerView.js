import React from 'react';
import { Link } from 'react-router-dom';

const AnswerView =()=> {
    return(
        <section class="account-section">
            <div class="account-container">
                <div class="sidebar">
                    <div class="profile">
                        <div class="img-profile"></div>
                        <div class="profile-infos">
                            <div class="profile-info profile-name">황현정</div>
                            <div class="profile-info profile-email">
                                <i class="far fa-envelope"></i> hse05105@naver.com</div>
                            <div class="profile-info profile-date">
                                <i class="fas fa-birthday-cake"></i> 1999.01.23</div>
                        </div>
                    </div>
                    <div class="profile-tabs">
                        <Link class="profile-tab answer-tab" to='/profile/answer'>
                            나의 답변
                        </Link>
                        <Link class="profile-tab account-tab" to='/profile'>
                            나의 계정
                        </Link>
                    </div>
                    <div class="logout-button">
                    <i class="fas fa-power-off"></i>
                    로그아웃
                    </div>
                </div>
                <div class="my-answer-container">
                    <div class="my-answer-title">나의 답변</div>
                    <div class="my-answer-content">
                        <div class="my-answer-header">
                            <Link class="nav-btn btn-pre" to='/profile/answer'>
                                <i class="fas fa-chevron-left fa-2x"></i>
                            </Link>
                            <div class="title-text">내가 보는 나</div>
                            <div class="date-text">2020.09.06</div>
                        </div>
                        <div class="answers-wrapper">
                            <div class="answers">
                                <div class="question-field">Q1. 나의 장점은?</div>
                                <div class="answer-field">
                                    <div class="answer-elem">
                                        - 처음 본 사람들에게 상냥하다
                                    </div>
                                    <div class="answer-elem">
                                        - 정직하려고 노력한다.
                                    </div>
                                    <div class="answer-elem">
                                        - 매사 민폐는 안 끼칠 만큼 좋은 결과를 낸다
                                    </div>
                                </div>
                            </div>
                            <div class="answers">
                            <div class="question-field">Q2. 나의 단점은?</div>
                            <div class="answer-field">
                                <div class="answer-elem">
                                    - 게으르다
                                </div>
                                <div class="answer-elem">
                                    - 신경질적이다.
                                </div>
                                <div class="answer-elem">
                                    - 한 번 친해지면 막 대한다.
                                </div>
                                <div class="answer-elem">
                                    - 지각을 자주한다.
                                </div>
                                <div class="answer-elem">
                                    - 이기적이다.
                                </div>
                                <div class="answer-elem">
                                    - 평소 자신의 일에 대해 감정적인 반면 남의 일엔 냉정하다
                                </div>
                            </div>
                            </div>
                            <div class="answers">
                            <div class="question-field">Q3. 나의 장점은?</div>
                            <div class="answer-field">
                                <div class="answer-elem">
                                    - 처음 본 사람들에게 상냥하다
                                </div>
                                <div class="answer-elem">
                                    - 정직하려고 노력한다.
                                </div>
                                <div class="answer-elem">
                                    - 매사 민폐는 안 끼칠 만큼 좋은 결과를 낸다
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnswerView;