import axios from 'axios';
// react 로그인 회원가입 구현
// 로그인 진행을 위해 form 에서 submit을 통해 
// 현재 name과 pwd를 dispatch를 통해
// 액션을 실행해줘야 한다.
// 그러므로 액션 관련 함수를 생성해줘야 한다.
// registerr api
export function registerUser(userData) {
    return ;
}

// login api
export function loginUser(userData) {
    return ;
}


// 예시
// 모듈화된 axios로 제작된 request를 사용해서 액션함수 생성
// post 요청을 보내고 받은 값을 payload에 실어 reducer에서 해당 타입을 읽을 수 있도록 해야한다.
/**
 * export funtion registerUser(dataToSubmit) {
 *    const data = request("post", USER_URL + "/register", dataToSubmit);
 *    return {
 *      type: REGISTER_USER,
 *      payload: data,
 *    };
 * }
 * 
 * export funtion loginUser(dataToSubmit) {
 *    const data = request("post", USER_URL + "/login", dataToSubmit);
 *    return {
 *      type: LOGIN_USER,
 *      payload: data,
 *    };
 * }
 */