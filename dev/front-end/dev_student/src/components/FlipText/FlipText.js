import React from 'react';
import './FlipText.css';
const FlipText = () => {
    return (
        <React.Fragment>
            <div class="flip">
                <div class="flip__container">
                    <p class="flip__container__text">
                        Hello
                        </p>
                    <ul class="flip__container__list">
                        <li class="flip__container__list__item">world !</li>
                        <li class="flip__container__list__item">Student !</li>
                        <li class="flip__container__list__item">Workers !</li>
                        <li class="flip__container__list__item">everybody !</li>
                    </ul>
            
                </div>
            </div>
        </React.Fragment>

    );
}

export default FlipText;