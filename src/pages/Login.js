import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleInputEmail = (e) => {
      e.preventDefault();
      setInputEmail(e.target.value);
    }

    const handleInputPassword = (e) => {
      e.preventDefault();
      setInputPassword(e.target.value);
    }

    const handleSubmit = async() => {
      
      const inputInfo = {
        email : inputEmail,
        password : inputPassword
      };
      
      try{
        const response = await axios.get('/api/getUsername');
        console.log(response);
        console.log(inputInfo);
      } catch (e) {
        console.log('err');
      } 
    }

    return (
        <section className="login-section">
            <div className="sections-overlay login-overlay">
                <div className="login-container">
                    <div className="login-tab-wrapper">
                        <div className="register-tab">
                            <Link className="register-label sub-tab lang-eng" to="/Register">SignUp</Link>
                        </div>
                        <div className="login-tab">
                            <h2 className="login-label lang-eng">Log In</h2>
                        </div>
                    </div>
                    <div className="login-form">
                        <div className="login-form-container">
                            <div className="login-field id-field">
                                <input type="text" 
                                onChange = {(e) => handleInputEmail(e)}
                                placeholder="Email" required />
                            </div>
                            <div className="login-field pwd-field">
                                <input type="password" 
                                onChange = {(e) => handleInputPassword(e)}
                                placeholder="Password" required />
                            </div>
                        </div>
                    </div>
                    <button className="login-button lang-eng" onClick={(e) => handleSubmit(e)}>Login Now</button>
                    {/* <Link to="/" >Login Now</Link>  */}
                </div>
            </div>      
        </section>
    );
};

export default Login;
