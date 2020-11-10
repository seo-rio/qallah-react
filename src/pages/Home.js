import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as service from '../api/questionToMeApi';
import { questionToMeApi } from '../api/questionToMeApi';

const Home = () => {
    const [username, setUserName] = useState(null);

    const clickEvent = () => {
        // service.fetchQuestion().
        // then(function(response) {
        //     console.log(response);
        // }).catch(function(error){
        //     console.log(error);
        // })
        // // axios.get('/getData',{
        // // }).then(function(response) {
        // //     console.log(response);
        // // }).catch(function(error){
        // //     console.log(error);
        // // })
        // axios.get('/getData', {
        // }).then ( function (res) {
        //     console.log(res)
        // }).catch( function (err) {
        //     console.log(err);
        // })
        // console.log('Hello')
        questionToMeApi
            .getQuestionList()
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    useEffect(() => {
        fetch('/api/getUsername')
            .then((res) => res.json())
            .then((user) => setUserName(user.username));
    }, []);

    return (
        <div>
            <h1>홈</h1>
            <p>이곳은 홈이에요.</p>
            {username ? (
                <h1>{`Hello ${username}`}</h1>
            ) : (
                <h1>Loading... please wait</h1>
            )}
            <button onClick={() => clickEvent()}>버튼 눌러주세요.</button>
        </div>
    );
};

export default Home;
