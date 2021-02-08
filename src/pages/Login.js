import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section class="login-section">
            <div class="sections-overlay login-overlay">
                <div class="login-container">
                    <div class="login-tab-wrapper">
                        <div class="register-tab">
                            <Link class="register-label sub-tab lang-eng" to="/Register">SignUp</Link>
                        </div>
                        <div class="login-tab">
                            <h2 class="login-label lang-eng">Log In</h2>
                        </div>
                    </div>
                    <div class="login-form">
                        <div class="login-form-container">
                            <div class="login-field id-field">
                                <input type="text" placeholder="Email" required />
                            </div>
                            <div class="login-field pwd-field">
                                <input type="password" placeholder="Password" required />
                            </div>
                        </div>
                    </div>
                    <Link to="/" class="login-button lang-eng">Login Now</Link> 
                </div>
            </div>      
        </section>
    );
};

export default Login;
