import React, { useState } from 'react';
import { FormGroup, Input, Button, Row, Collapse } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Tag from "../../Tag/Tag";
import './HowToListHeaderTemplate.css';
const HowToListHeaderTemplate = ({ question_count }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [serachBarIsOpen, setSearchBarIsOpen] = useState(false);

    const toggleSearchBar = () => {
        console.log("SerachBar Open!");
        setSearchBarIsOpen(prevState => !prevState);
    }
    const toggleDropDown = () => setDropdownOpen(prevState => !prevState);

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
                <div className="search-button-wrapper">
                    <Button onClick={toggleSearchBar} color="primary">검색</Button>

                </div>

                <div className="filter-button-wrapper">
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
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
                <Collapse isOpen={serachBarIsOpen}>
                    <div className="searchbar-wrapper">
                        <FormGroup>
                            <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="무엇이든 검색해보세요!"
                            />
                        </FormGroup>
                    </div>
                </Collapse>
            </Row>
        </React.Fragment>
    );
}

export default HowToListHeaderTemplate;