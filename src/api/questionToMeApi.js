//import axios from 'axios';
import apiConfing from './apiConfig';

// // question 데이터 조회
// export function fetchQuestion() {
//     return axios.get('/getData');
// }

// // question 생성
// export function createQuestion() {
//     return axios.get('');
// }

export const questionToMeApi = {
    getQuestionList() {
        return apiConfing({
            url: '/member/list',
            method: 'get',
        });
    },
    registerAnswer() {
        return apiConfing({
            url: '/registeranswer',
            method: 'post',
        });
    },
};
