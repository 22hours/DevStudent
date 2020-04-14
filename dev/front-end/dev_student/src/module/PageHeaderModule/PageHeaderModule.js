import React, { useState } from "react";
import { FormGroup, Input, Button, Row, Collapse } from "reactstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "./PageHeaderModule.css";
const PageHeaderModule = ({ question_count, param, setParam }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [serachBarIsOpen, setSearchBarIsOpen] = useState(false);

    const toggleSearchBar = () => {
        console.log("SerachBar Open!");
        setSearchBarIsOpen((prevState) => !prevState);
    };
    const toggleDropDown = () => setDropdownOpen((prevState) => !prevState);

    return (
        <React.Fragment>
            <Row className="howto-list-header-header">
                <span className="content-header">HowTo : [ {param} ] </span>
                <span className="mobile-new-question-button"></span>
            </Row>
            {/* <Row><Tag></Tag></Row> */}
            <Row>
                <p>
                    <span className="questions-number-span"> {question_count} </span>
                    <span className="question-descript-span"> &nbsp; 건의 질문이 있습니다</span>
                </p>
                <div className="search-button-wrapper">
                    <Button onClick={toggleSearchBar} color="info">
                        검색
                    </Button>
                </div>

                <div className="filter-button-wrapper">
                    <Dropdown color="info" isOpen={dropdownOpen} toggle={toggleDropDown}>
                        <DropdownToggle caret>필터</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem header>정렬기준</DropdownItem>
                            <DropdownItem
                                onClick={() => {
                                    setParam("views");
                                }}
                            >
                                조회순
                            </DropdownItem>
                            <DropdownItem
                                onClick={() => {
                                    setParam("answers");
                                }}
                            >
                                화제순
                            </DropdownItem>
                            <DropdownItem
                                onClick={() => {
                                    setParam("date");
                                }}
                            >
                                최신순
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Row>
            <div className="serach-bar-collapse-wrapper">
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
            </div>
        </React.Fragment>
    );
};

export default PageHeaderModule;
