import React from 'react';
import { Link } from 'react-router-dom';

const ExpMain = () => {
    return (
        <section class="sections">
            <div class="sections-overlay">
                <div class="exp-container">
                    <div class="exp-header">
                        <h2>'hse05105'의 경험</h2>
                    </div>
                    <div class="exp-content">
                    <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1GVhbgIfz82DTdoNBFM7HW0z4GaBWWRur20Wmi3vlTDo&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'>
                    </iframe>
                    </div>
                    <div class="exp-footer">
                        <div class="exp-start">
                            <Link class="exp-button" to="/experience/write">경험 추가</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExpMain;