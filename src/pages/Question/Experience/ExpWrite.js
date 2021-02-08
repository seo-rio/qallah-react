import React from 'react';
import { Link } from 'react-router-dom';

const ExpWrite = () => {
    return (
    <section class="sections">
        <div class="sections-overlay">
            <div class="expr-wrap">
                {/* <div class="expr-elem expr-header">나의 경험</div> */}
                <div class="expr-elem expr-content">
                    <div class="expr-field expr-title">
                        <div class="title-chk">
                            <input type="checkbox" /> 제목
                        </div>
                        <div class="title-field">
                            <input class="input-field" type="text" />
                        </div>
                    </div>
                    <div class="expr-field expr-text">
                        <textarea class="input-field" name="exp-text" id="exp-text" cols="100%" rows="5"></textarea>
                    </div>
                    <div class="expr-field expr-date">
                        <div class="header-field date date-header">
                          <i class="fas fa-bars"></i> 날짜 
                        </div>

                        <div class="input-field date date-input">
                            <i class="fas fa-trash"></i>
                            <input type="date" />
                            <input type="checkbox" /> 기간
                        </div>
                    </div>
                    <div class="expr-field expr-theme">
                        <div class="header-field theme theme-header">
                          <i class="fas fa-bars"></i>  주제
                        </div>
                        <div class="input-field theme theme-input">
                            <input class="input-field" type="text" placeholder="#을 이용하여 태그를 작성하세요!" />
                        </div>
                    </div>
                    <div class="expr-field expr-file">
                        <div class="header-field file file-header">
                          <i class="fas fa-bars"></i>  첨부파일
                        </div>
                        <div class="file-wrapper">
                            <div class="file-input">
                              <i class="fas fa-plus"></i>
                            </div>
                            <div class="file-input">
                              <i class="fas fa-plus"></i>
                            </div>
                            <div class="file-input">
                              <i class="fas fa-plus"></i>
                            </div>
                            <div class="file-input">
                              <i class="fas fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div class="expr-field expr-link">
                        <div class="header-field link link-header">
                          <i class="fas fa-bars"></i> 링크
                        </div>
                        <div class="input-field link link-input">
                            <input class="input-field" type="text" />
                        </div>
                    </div>
                    <div class="expr-btn-wrap">
                      <Link to="/experience/done">
                        <div class="save-btn expr-add-btn">
                            저장하기
                        </div>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ExpWrite;