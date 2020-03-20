import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import ContentListTemplate from './ContentListTemplate'
class PostContent extends Component {

    state = {
        contents : [
            {number : "번호", views:"130", title : "제목", author : "작성자"},
            {number : 1, views:"130", title : "안녕하세요", author : "이정환"},
            {number : 2, views:"130", title : "뻐큐", author : "신다민"},
            {number : 3, views:"130", title : "안녕하세요", author : "김효빈"}
        ]
    }

    render() {
        const { contents } = this.state;
        return (
            <section className="Board">
                <Container>
                    <Row>
                        <Col><h1>게시판 이름</h1></Col>
                    </Row>
                    <Row>
                       <ContentListTemplate contents={contents} handleContentPage={this.props.handleContentPage}></ContentListTemplate>
                    </Row>
                </Container>
            </section>
        );
    };
}

export default PostContent;