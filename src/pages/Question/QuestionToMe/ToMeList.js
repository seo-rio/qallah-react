import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';


const ToMeList = () => {
        const [tmq, setTmqs] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          const fetchUsers = async () => {
            try {
              // 요청이 시작 할 때에는 error 와 users 를 초기화하고
              setError(null);
              setTmqs(null);
              // loading 상태를 true 로 바꿉니다.
              setLoading(true);
              const response = await axios.get('/api/test/MQ0001');
              console.log(response);
              setTmqs(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
              setError(e);
            }
            setLoading(false);
          };
      
          fetchUsers();
        }, []);
      
        
        if (loading) return <div>로딩중..</div>;
        if (error) return <div>에러가 발생했습니다</div>;
        if (!tmq) return null;
        
        return (
            <section class="sections tome-list-section">
                <div class="sections-overlay">
                    <div class="list-container tome-list-container">
                        <div class="move-wrap">
                            <div class="list-page-count">13/13</div>
                            <Link class="move move-pre" to="/questiontome">
                                <i class="fas fa-chevron-left fa-3x"></i>
                            </Link>
                            <Link class="move move-next" to="/questiontome/done">
                                <i class="fas fa-chevron-right fa-3x"></i>
                            </Link>
                        </div>
                        <div class="progress-on">
                            <div class="progress-bar" style={{width: "6%",backgroundColor: "#7b5e9e"}}></div>
                        </div>
                        <div class="tome-qna">
                            <div class="tome-question-field">
                                <div class="tome-question-num">02.&nbsp;</div>
                                <div class="tome-question-title">
                                    내가 현재 시간을 함께 보내는 이들의 이름은?
                                </div>
                            </div>
                            <div class="tome-answer-field">
                                <input class="answer-input" type="text" />
                                <i class="fas fa-trash"></i>
                            </div>
                            <div class="answer-add-btn">
                                <i class="fas fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                /* <ul>
                    {tmq.map(value => (
                    <li key={value.me_question_seq}>
                        {value.me_question_content} ({value.me_question_seq})
                    </li>
                    ))}
                </ul> */

        );
      }

export default ToMeList;