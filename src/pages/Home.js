import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as service from '../api/questionToMeApi';
import { questionToMeApi } from '../api/questionToMeApi';
import quote_l from '../asset/double-quotation.png';
import quote_r from '../asset/double-quotation2.png';
import q_tome from '../asset/나-icon.png';
import q_byothers from '../asset/남-icon.png';
import q_exp from '../asset/경험-icon.png';
import q_ref from '../asset/성찰-icon.png';

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
        <div class="main">
            <section class="main-banner-container">
                <div class="main-banner-overlay">
                    <div class="banner-wrap">
                        <div class="banner banner-wrap">
                            <h2 class="banner-title">나에게,</h2>
                            <h2 class="banner-title">질문하세요</h2>
                            <div class="banner-desc">모르는게 없는 세상</div>
                            <div class="banner-desc">나는 나를 안다고 말할 수 있을까?</div>
                        </div>
                        <div class="double-quotation double-quotation-l">
                            <img src={quote_l} alt="quote"></img>
                        </div>
                        <div class="double-quotation double-quotation-r">
                            <img src={quote_r} alt="quote"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section class="main-question-container">
                <h2 class="main-question-header eng-title">Question</h2>
                <div class="main-question-desc">살면서 마주할 수많은 질문들</div>               
                <div class="main-question-list">
                    <nav class="q-nav">
                        <ul>
                            <li>
                                <Link to="/questiontome">
                                    <img class="q_img" src={q_tome} alt=""></img>
                                </Link>
                            </li>
                            <li>
                                <Link to="questionbyothers">
                                    <img class="q_img" src={q_byothers} alt=""></img>
                                </Link>
                            </li>
                            <li>
                                <Link to="experience">
                                    <img class="q_img" src={q_exp} alt=""></img>
                                </Link>
                            </li>
                            <li>
                                <Link to="reflection">
                                    <img class="q_img" src={q_ref} alt=""></img>
                                </Link>
                            </li>
                        </ul>
                    </nav>    
                </div> 
            </section>
            <section class="main-answer-container">
                <h2 class="main-answer-header eng-title">Answer</h2>
            </section>
        </div>
    );
};

export default Home;
