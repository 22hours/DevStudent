import React from "react";
import "./HowToContentHeader.css";
const HowToContentHeader = (props) => {
    const { _id, title, author, date, views, mine, solved } = props;
    const HeaderBadge = () => {
        if (solved) {
            return <span className="solved-bagde">SOLVED</span>;
        } else {
            return <span className="solved-bagde">SOLVED</span>;
        }
    };
    const MineBadge = () => {
        if (mine) {
            return <span className="mine-bagde">내글</span>;
        } else {
            return <p></p>;
        }
    };
    return (
        <React.Fragment>
            <div>
                <span className="question-header">{title}</span>
                <span className="quetsion-id">&nbsp;#{_id}</span>
                <HeaderBadge />
                <MineBadge />
            </div>
            <div className="content-intro-wrapper-div">
                <div className="content-intro-wrapper-div-left">
                    <p className="content-intro-wrapper">
                        <span className="author-span">{author}</span>
                        <span className="author-level-span"></span>
                        <span className="author-outro">&nbsp;님의 질문&nbsp;</span>
                    </p>
                </div>
                <div className="content-intro-wrapper-div-right">
                    <p className="content-intro-wrapper">
                        <span className="date-text-span">Asked</span>
                        <span className="date-span">&nbsp; {date}</span>
                        <span className="view-text-span">&nbsp; Views</span>
                        <span className="view-span"> &nbsp; {views}</span>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HowToContentHeader;
