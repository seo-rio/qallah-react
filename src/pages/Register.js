import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  //info
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userChkPassword, setUserChkPassword] = useState("");
  const [userBirth, setUserBirth] = useState("");
  //chk
  const [isDuplicateEmail, setIsDuplicateEmail] = useState(false);
  const [chkInput, setChkInput] = useState({state:""});
  // const [chkPassword, setChkPassword]

  useEffect(() => {
    setChkInput({state : ""});
    setIsDuplicateEmail(false);
    console.log(chkInput);
  },[userEmail, userName, userPassword, userChkPassword, userBirth]);

  const regExp = {
    checkEmail: /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
    checkPasswordFrom8To10 : /^[a-zA-Z0-9]{8,20}$/,
    checkPasswordNum : /[0-9]/g,
    checkPasswordEng : /[a-z]/ig,
    checkPasswordFourWord : /(\w)\1\1\1/,
  };


  const handleUserEmail = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value);
  }

  const handleUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleUserPassword = (e) => {
    e.preventDefault();
    setUserPassword(e.target.value);
  }

  const handleUserChkPassword = (e) => {
    e.preventDefault();
    setUserChkPassword(e.target.value);
  }

  const handleUserBirth = (e) => {
    e.preventDefault();
    setUserBirth(e.target.value);
  }

  // 이메일 유효성 검사 (unique)
  const checkEmail = (email) => {
    return (email !== '' && email !== 'undefined' && regExp.checkEmail.test(email));

  }
  // 이메일 중복 , 존재 유무 검사 (서버 통신 필요)
  const checkDuplicateEmail = async () => {
      const response = await axios.get('/api/getUseremail');
      const arr = response.data;
      for(var key in arr) {
        if(arr[key].member_email === userEmail) {
          setIsDuplicateEmail(true);
          return ;
        }
      }
  };

  // 비밀번호 유효성 검사 
  const checkPassword = (uid, upw) => {
    if(!regExp.checkPasswordFrom8To10.test(upw)) {
      setChkInput({state: "notFrom8To20"});
      return "비밀번호는 숫자와 영문자 조합으로 8~20 자리를 사용해야 합니다.";
    }

    var chk_num = upw.search(regExp.checkPasswordNum);
    var chk_eng = upw.search(regExp.checkPasswordEng);
    if(chk_num < 0 || chk_eng < 0) {
      setChkInput({state: "notEngOrNum"});
      return "비밀번호는 숫자와 영문자를 혼용해야 합니다.";
    }

    if(regExp.checkPasswordFourWord.test(upw)) {
      setChkInput({state: "fourWord" });
      return "비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.";
    }

    if(upw.search(uid) > -1) {
      setChkInput({state:"IdInPwd"});
      return "ID가 포함된 비밀번호는 사용하실 수 없습니다.";
    }   
    return "";
  }
  //비밀번호 === chk비밀번호 ?
  const isEqaulChkPwd = (upw, uchk) => {
    if(upw === uchk) {
      return true;
    } else {
      return false;
    }
  }

  // 모든 인풋창 채워져 있는지 체크 
  const checkFullInput = () => {
    if(userEmail === "") {
      return false;
    } else if (userName === "") {
      return false;
    } else if(userPassword === "") {
      return false;
    } else if(userChkPassword === "") {
      return false;
    } else if(userBirth === "") {
      return false;
    } 
    return true;
  }

  const handleSubmit = () => {
    const userInfo = {
      email : userEmail,
      nickname: userName,
      password : userPassword,
      chkpassword: userChkPassword,
      birth: userBirth
    };
    setChkInput({state: ""});
    
    // 비밀번호와 확인 비밀번호 같은지 체크
    if(!isEqaulChkPwd(userInfo.password, userInfo.chkpassword)) {
      setChkInput({state:"notEqualChkPwd"});
    }

    // 비밀번호 유효성 체크
    checkPassword(userInfo.email, userInfo.password);

    // 이메일 중복 체크
    checkDuplicateEmail();

    // 이메일 유효성 체크
    if(!checkEmail(userInfo.email)) {
      setChkInput({state: "invalidEmail"});
    }
    // 모든 인 풋 창 채웠는지 체크
    if(!checkFullInput()) {
      setChkInput({state: "hasEmptyInput"});
    }
    
    // axios api
    console.log(userInfo);
  }
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
                                <input 
                                  type="email"
                                  onChange={(e) => handleUserEmail(e)} 
                                  placeholder="Email" />
                            </div>
                            { isDuplicateEmail ? 
                              <div class="err-msg email-err" style={{color:"#FF8164"}}>이미 존재하는 이메일입니다.</div>
                            : chkInput.state === "invalidEmail" ?
                              <div class="err-msg email-err" style={{color:"#FF8164"}}>잘못된 이메일 형식입니다.</div>
                            : 
                              <></>
                            }
                            <div class="register-field name-field">
                                <input 
                                  type="text"
                                  onChange={(e) => handleUserName(e)} 
                                  placeholder="Name" />
                            </div>
                            <div class="register-field password-field">
                                <input 
                                  type="password"
                                  onChange={(e) => handleUserPassword(e)} 
                                  placeholder="Password" />
                            </div>
                            { chkInput.state === "notFrom8To20" ?
                              <div class="err-msg email-err" style={{color:"#FF8164"}}>비밀번호는 숫자와 영문자 조합으로 8~20 자리를 사용해야 합니다.</div>
                            : chkInput.state === "notEngOrNum" ?
                              <div class="err-msg email-err" style={{color:"#FF8164"}}>비밀번호는 숫자와 영문자를 혼용해야 합니다.</div>
                            : chkInput.state === "fourWord" ?
                              <div class="err-msg email-err" style={{color:"#FF8164"}}>비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.</div>
                            : chkInput.state === "IdInPwd" ?
                              <div class="err-msg email-err" style={{color:"#FF8164"}}>ID가 포함된 비밀번호는 사용하실 수 없습니다.</div>
                            :
                              <div class="err-msg email-err"></div>
                            }
                            <div class="register-field chk-password-field">
                                <input 
                                  type="password"
                                  onChange={(e) => handleUserChkPassword(e)} 
                                  placeholder="Repeat Password" />
                            </div>
                            { chkInput.state === "notEqualChkPwd" ?
                              <div class="err-msg email-err" style={{color:"#FF8164"}}>비밀번호와 일치하지 않습니다.</div>
                            : 
                              <div class="err-msg email-err"></div>
                            }
                            <div class="register-field date-field">
                                <div class="label-birthday">생년월일</div>
                                <input type="date" onChange={(e) => handleUserBirth(e)} />
                            </div>
                            { chkInput.state === "hasEmptyInput" ?
                              <div class="err-msg email-err" style={{color:"#FF8164"}}>모두 작성해주시기 바랍니다.</div>
                            : 
                              <div class="err-msg email-err"></div>
                            }
                        </div>
                    </div>
                    <button 
                      class="register-button lang-eng" 
                      onClick={() => handleSubmit()}
                    >
                      Sign Up
                    </button>
                    {/* <Link class="register-button lang-eng" to="/">Sign Up</Link> */}
                </div>      
            </div>
        </section>
    );
};

export default Register;
