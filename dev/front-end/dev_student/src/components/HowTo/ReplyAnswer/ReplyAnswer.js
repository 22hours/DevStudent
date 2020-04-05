import React, { useState,useContext } from 'react';
import {CREATE_ANSWER} from '../../../Mutation/mutations';
import { useMutation } from '@apollo/react-hooks';
import UserContext from '../../../Context/UserContext';
import { Container, Input, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './ReplyAnswer.css'
import MarkdownContent from '../../MarkdownContent/MarkdownContent';
const ReplyAnswer = ({id}) => {   
    const {user} = useContext(UserContext);
    const sessionToken = window.sessionStorage.getItem('token');
    const [activeTab, setActiveTab] = useState('1');
    const [comment,setComment] = useState();
    const [createAnswer] = useMutation(CREATE_ANSWER);
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const handleCreateAnswer = async() =>{
        createAnswer({variables : {
            token : sessionToken,
            question_id : id,
            author : user,
            content : comment
        }})
        .then(response => {
            if(response.data.createAnswer._id){
                alert("댓글을 저장했습니다.");
            }else{
                alert("댓글 저장 실패");
            }
            // window.location.href = 'http://localhost:3000/howto/id';
        })
        .catch(err => {
            alert(err.messeage)
        })
    }


    return (
        <div className="reply-answer-wrapper">
            <div className="reply-answer-header">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Wrtie
              </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Previews
              </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="reply-answer-main">
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Input
                                    placeholder="write your opinion.."
                                    value={comment}
                                    onChange={({target : {value}}) => setComment(value)}
                                    size="large"
                                    type="textarea"></Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                            <Button onClick={handleCreateAnswer} color="info">
                                    Comment
                                </Button>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                     <Row>
                            <Col sm="12">
                            <div className="reply-wrapper">
                                <MarkdownContent
                                content={comment}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                                <Button onClick={handleCreateAnswer} color="info">
                                    Comment
                                </Button>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
}

export default ReplyAnswer;