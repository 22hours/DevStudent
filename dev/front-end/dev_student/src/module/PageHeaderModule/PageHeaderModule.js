import React, { useState } from "react";
import { FormGroup, Input, Button, Row, Collapse } from "reactstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "./PageHeaderModule.css";

//icons
import SearchIcon from "@material-ui/icons/Search";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
const PageHeaderModule = ({ question_count, param, setParam }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [serachBarIsOpen, setSearchBarIsOpen] = useState(false);
    const [filterIsOpen, setFilterIsOpen] = useState(false);

    const toggleSearchBar = () => {
        setSearchBarIsOpen((prevState) => !prevState);
    };
    const toggleFilter = () => {
        setFilterIsOpen((prevState) => !prevState);
    };
    const toggleDropDown = () => setDropdownOpen((prevState) => !prevState);

    const FilterItem = ({ type, content }) => {
        if (type === param) {
            return (
                <div className="filter-item" id="selected">
                    <span id="selected">{content}</span>{" "}
                </div>
            );
        } else {
            return (
                <div className="filter-item" onClick={() => setParam(type)}>
                    <span>{content}</span>
                </div>
            );
        }
    };

    return (
        <div className="PageHeaderModule">
            <Row className="howto-list-header-header">
                <span className="content-header">HowTo </span>
                <div style={{ marginLeft: "10px" }} className="mobile-only">
                    <Button style={{ fontSize: "11px", marginTop: "8px" }} color="info">
                        NEWQUESTION
                    </Button>
                </div>
            </Row>
            {/* <Row><Tag></Tag></Row> */}
            <Row>
                <p>
                    <span className="questions-number-span"> {question_count} </span>
                    <span className="question-descript-span"> &nbsp; 건의 질문이 있습니다</span>
                </p>
                <div className="search-button-wrapper">
                    <SearchIcon id="clickable-icon" onClick={toggleSearchBar} />
                    <BrightnessLowIcon id="clickable-icon" onClick={toggleFilter} />
                </div>
            </Row>
            <div className="serach-bar-collapse-wrapper">
                <Collapse isOpen={filterIsOpen}>
                    <div className="filter-wrapper">
                        <div className="filter-header">
                            <div className="filter-item">
                                <BrightnessLowIcon style={{ fontSize: "18px" }} />
                            </div>
                            <FilterItem content="최신순" type="date" />
                            <FilterItem content="조회순" type="views" />
                            <FilterItem content="화제순" type="answers" />
                        </div>
                    </div>
                </Collapse>
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
        </div>
    );
};

export default PageHeaderModule;
