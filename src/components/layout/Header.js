import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, setUsers } = useState(false);
    const { login, setLogin } = useState(false);
    const { account, setAccount } = useState(true);
    return (
        <header class="page-header">
            <nav class="header-nav">
                <div class="nav_l hidden"></div>
                {!login ? (
                    <ul class="nav_md">
                        <li>
                            <Link to="/questiontome">내가 보는 나</Link>
                        </li>
                        <li>
                            <Link to="/questionbyothers">남이 보는 나</Link>
                        </li>
                        <li class="logo-li">
                            <Link to="/">
                                <h2 class="logo">Qallah</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience">내가 한 경험</Link>
                        </li>
                        <li>
                            <Link to="/reflection">인생의 성찰</Link>
                        </li>
                    </ul>
                ) : !account ? ( //로그인, 회원가입, 회원 프로필 페이지에선 목차가 안 보임
                    <ul class="nav_md">
                        <li class="logo-li">
                            <Link to="/">
                                <h2 class="logo">Qallah</h2>
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul class="nav_md">
                        <li class="logo-li account-logo">
                            <Link to="/">
                                <h2 class="logo">Qallah</h2>
                            </Link>
                        </li>
                    </ul>
                )}
                <div class="nav_r">
                    {!user ? (
                        // 로그아웃 시
                        <Link to="/login">
                            <div class="nav_right nav_login lang-eng">
                                Login
                            </div>
                        </Link>
                    ) : !login ? (
                        // 로그인 시
                        <div class="nav_right nav_profile">
                            <Link to="/">
                                <div class="profile-picture"></div>
                            </Link>
                        </div>
                    ) : (
                        // 숨김 (로그인, 회원가입, 프로필 페이지)
                        <div class="nav_r hidden"></div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
