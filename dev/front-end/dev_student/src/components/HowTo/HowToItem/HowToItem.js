import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Tag from '../../Tag/Tag';
import './HowToItem.css';
class HowToItem extends Component {

    render() {
        const { id, author, title, date, previews, answers, views } = this.props;
        const noPaddingStyle = {
            paddingLeft: 0,
            paddingRight: 0,
            width: '80px',
            height: '120px',
            minLeft: '60px'
        };
        return (
            <React.Fragment>
                <div className="howto-item-wrapper">
                    <div className="howto-item">
                        <div className="red-border content">

                            <div className="red-border">
                                <span className="title-span">
                                    <NavLink to={"/howto/question/" + id}>
                                        {title}
                                    </NavLink>
                                </span>
                                    &nbsp;&nbsp;
                                <span className="asked-span">
                                    {date}
                                </span>
                            </div>
                            <div>
                                <span className="previews-span">{previews}</span>
                            </div>
                            <div className="red-border">
                                <span className="author-span">{author} </span>
                                <span className="author-span-add">님의 글</span>
                            </div>
                            <div className="red-border"><Tag></Tag></div>
                        </div>
                        <div style={noPaddingStyle} className="red-border stats-area">
                            <div className="answer-wrapper red-border">
                                <div className="answer-number-wrapper">
                                    <p>
                                        <span className="answer-number">{answers}</span>
                                    </p>
                                </div>
                                <div className="answer-span-wrapper"><p>
                                    <span className="answer-span">answers</span></p>
                                </div>

                            </div>
                            <div className="views-wrapper red-border">
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