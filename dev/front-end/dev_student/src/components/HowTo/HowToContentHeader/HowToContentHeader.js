import React from 'react';
import './HowToContentHeader.css';
const HowToContentHeader = (props) => {
    const {title,author,date,views,mine} = props;
    return (
        <React.Fragment>
            <div>
                <p className="content-title-wrapper">
                    <span className="content-header-question-mark">Q. &nbsp;</span>
                    <span className="content-header">{title}</span>
                </p>
            </div>

            <div className="content-intro-wrapper-div">
                <div className="content-intro-wrapper-div-left">
                    <p className="content-intro-wrapper">
                        <span className="author-span">{author}</span>
                        <span className="author-level-span">&nbsp;lvl:200</span>
                        <span className="author-outro">&nbsp;님의 질문</span>
                    </p>
                </div>
                <div className="content-intro-wrapper-div-right">
                    <p className="content-intro-wrapper">
                        <span className="author-span fake">a</span>
                        <span className="date-text-span">Asked</span>
                        <span className="date-span">&nbsp; {date}</span>

                        <span className="view-text-span">&nbsp; Views</span>
                        <span className="view-span"> &nbsp; {views}</span>
                    </p>
                </div>
            </div>
  

        </React.Fragment>
    );
}

export default HowToContentHeader;