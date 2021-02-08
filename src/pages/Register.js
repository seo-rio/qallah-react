import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section class="register-section">
            <div class="sections-overlay register-overlay">
                <div class="register-container">
                    <div class="register-tab-wrapper">
                        <div class="login-tab">
                            <Link class="login-label sub-tab lang-eng" to="/Login">Login</Link>
                        </div>
                        <div class="register-tab">
                            <h2 class="register-label lang-eng">Sign Up</h2>
                        </div>
                    </div>
                    <div class="register-form">
                        <div class="register-form-container">
                            <div class="register-field email-field">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div class="register-field name-field">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div class="register-field password-field">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div class="register-field chk-password-field">
                                <input type="password" placeholder="Repeat Password" />
                            </div>
                            <div class="register-field date-field">
                                <div class="label-birthday">생년월일</div>
                                <input type="date" />
                            </div>
                        </div>
                    </div>
                    <Link class="register-button lang-eng" to="/">Sign Up</Link>
                </div>      
            </div>
        </section>
    );
};

export default Register;
