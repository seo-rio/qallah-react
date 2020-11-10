import axios from 'axios';

// question 데이터 조회
export function fetchQuestion() {
    return axios.get('/getData');
}

// question 생성
export function createQuestion() {
    return axios.get('');
}
