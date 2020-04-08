import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Tag from "../../Tag/Tag";
import "./HowToItem.css";
class HowToItem extends Component {
    render() {
        const { id, author, title, date, previews, answers, views, solved, tags } = this.props;
        const TagList = tags.map((tagItem) => <Tag key={tagItem} tagItem={tagItem}></Tag>);
        const StatsArea = ({ children }) => {
            if (solved) {
                return (
                    <div className="stats-inner-box ">
                        <div className="stats-inner-box-solved">{children}</div>
                    </div>
                );
            }
            if (answers < 1) {
                return (
                    <div className="stats-inner-box ">
                        <div className="stats-inner-box-default">{children}</div>
                    </div>
                );
            } else {
                return (
                    <div className="stats-inner-box stats-inner-box-hot">
                        <div className="stats-inner-box-hot">{children}</div>
                    </div>
                );
            }
        };
        return (
            <React.Fragment>
                <div className="howto-item-wrapper">
                    <div className="howto-item">
                        <div className="stats-area-mobile">
                            <div className="answer-wrapper ">
                                <StatsArea>
                                    <div className="answer-number-wrapper">
                                        <p>
                                            <span className="answer-number">{answers}</span>
                                        </p>
                                    </div>
                                    <div className="answer-span-wrapper">
                                        <p>
                                            <span className="answer-span">answers</span>
                                        </p>
                                    </div>
                                </StatsArea>
                            </div>
                            <div className="views-wrapper ">
                                <div className="stats-inner-box">
                                    {" "}
                                    <div className="views-number-wrapper">
                                        <span className="views-number">{views}</span>
                                    </div>
                                    <div className="views-span-wrapper">
                                        <span className="views-span">watches</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div>
                                <span className="title-span">
                                    <NavLink to={"/howto/question/" + id}>{title}</NavLink>
                                </span>
                                &nbsp;&nbsp;
                                <span className="asked-span">{date}</span>
                            </div>
                            <div className="previews-box">
                                <span className="previews-span">{previews}</span>
                            </div>
                            <div>{TagList}</div>
                            <div>
                                <span className="author-span">{author} </span>
                                <span className="author-span-add">님의 글</span>
                            </div>
                        </div>
                        <div className=" stats-area">
                            <div className="answer-wrapper">
                                <StatsArea>
                                    <div className="answer-number-wrapper">
                                        <p>
                                            <span className="answer-number">{answers}</span>
                                        </p>
                                    </div>
                                    <div className="answer-span-wrapper">
                                        <p>
                                            <span className="answer-span">answers</span>
                                        </p>
                                    </div>
                                </StatsArea>
                            </div>
                            <div className="views-wrapper ">
                                <div className="views-number-wrapper">
                                    <span className="views-number">{views}</span>
                                </div>
                                <div className="views-span-wrapper">
                                    <span className="views-span">watches</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HowToItem;
