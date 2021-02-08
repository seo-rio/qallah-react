import React from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
    return (
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
                    <Link class="profile-tab answer-tab" to="/profile/answer">
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
                <div class="account-wrapper">
                    <div class="acc-title">나의 계정</div>
                    <div class="acc-content">
                        <div class="acc-header">내 프로필</div>
                        <div class="modify-field">
                            <div class="modify-user-img">
                                <div class="user-avatar-img">
                                    <div class="ab-avatar user-avatar-remove" title="프로필 사진 삭제">
                                        <i class="far fa-trash-alt fa-2x"></i>
                                    </div>
                                    <div class="ab-avatar user-avatar-edit" title="프로필 사진 수정">
                                        <i class="fas fa-pen fa-2x"></i>
                                    </div>
                                </div>
                            </div> 

                            <div class="modify-user-info">
                                <div class="info-detail user-name">
                                    <div class="info-label user-name-label">이름</div>
                                    <input type="text" />
                                    <div class="err-wrap">
                                    <div class="err-msg">이름을 반드시 입력해주세요.</div>
                                    </div>
                                </div>
                                <div class="info-detail user-email">
                                <div class="info-label user-email-label">이메일</div>  
                                <input type="text" />
                                <div class="err-wrap">
                                    <div class="err-msg">이메일 형식에 맞게 작성해주세요</div>
                                </div>
                                </div>
                                <div class="info-detail user-birthday">
                                <div class="info-label user-birthday-label">생일</div>  
                                <input type="date" value="1999-01-23" />
                                </div>
                            </div>
                        </div>

                        <div class="modify-pwd">
                            <div class="pwd-title">비밀번호 변경</div>
                            <div class="pwd-fields">
                            <div class="info-detail current-pwd">
                                <div class="cnt-pwd-label">현재 비번</div>  
                                <input class="pwd-input" type="password" />

                                <div class="err-wrap">
                                    <div class="err-msg">적절하지 않은 비밀번호입니다(영문+숫자 포함 8자리 이상)</div>
                                    {/* <div class="err-msg">현재 비밀번호와 맞지 않습니다.</div>
                                    <div class="err-msg">새 비밀번호가 서로 일치하지 않습니다.</div>  */}
                                </div>
                            </div>
                            <div class="new-pwd">
                                <div class="new-pwd-label">새 비번</div>
                                <input class="pwd-input" type="password" />  
                            </div>
                            <div class="retype-pwd">
                                <div class="re-pwd-label">새 비번 (Retype)</div>  
                                <input class="pwd-input" type="password" />
                            </div>
                            </div>
                        </div>
                        <div class="acc-save">저장</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyAccount;