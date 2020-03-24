import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Tag from "../../Tag/Tag";
import './HowToListHeaderTemplate.css';
const HowToListHeaderTemplate = ({ tags, question_count }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <React.Fragment>
            <Row>
                <span className="content-header">HowTo : [  전체보기 ] </span>
            </Row>
            <Row><Tag></Tag></Row>
            <Row >
                <p>
                    <span className="questions-number-span"> {question_count} </span>
                    <span className="question-descript-span">  &nbsp; 건의 질문이 있습니다</span>
                </p>
                <div className="filter-button-wrapper">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            필터
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>정렬기준</DropdownItem>
                            <DropdownItem>조회순</DropdownItem>
                            <DropdownItem>화제순</DropdownItem>
                            <DropdownItem>최신순</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default HowToListHeaderTemplate;