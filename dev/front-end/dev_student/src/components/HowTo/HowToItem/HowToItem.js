import React, { Component } from 'react'
import { Table, Container, Row, Col } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import Tag from '../../Tag/Tag';
import './HowToItem.css';
class HowToItem extends Component {

    render() {
        const { id, author, title, date, previews, tags, answers, views } = this.props;
        const noMarginStyle = {
            marginLeft: 0,
            marginRight: 0
        };
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
                                <span className="author-span">{author} lvl : 200</span>
                            </div>
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
                            <div className="red-border">{previews}</div>
                            <div className="red-border"><Tag></Tag></div>
                        </div>
                        <div style={noPaddingStyle} className="red-border stats-area">
                            <div className="answer-wrapper red-border">
                                <div className="answer-number-wrapper">
                                    <p>
                                        <span className="answer-number">{answers}</span>
                                    </p>
                                </div>
                                <div calssName="answer-span-wrapper"><p>
                                    <span className="answer-span">answers</span></p>
                                </div>

                            </div>
                            <div className="views-wrapper red-border">
                                <div className="views-number-wrapper">
                                    <span className="views-number">{views}</span>
                                </div>
                                <div calssName="views-span-wrapper">
                                    <span className="views-span">Views</span>
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