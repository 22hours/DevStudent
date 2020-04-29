import React, { useState } from "react";
import { FormGroup, Input, Button, Row, Collapse, Alert } from "reactstrap";
import "./PageHeaderModule.css";

//icons
import SearchIcon from "@material-ui/icons/Search";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import HelpIcon from "@material-ui/icons/Help";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

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
    const FilterIcon = () => {
        switch (param) {
            case "date":
                return <AccessTimeIcon />;
            case "views":
                return <VisibilityIcon />;
            case "answerCount":
                return <WhatshotIcon />;
            default:
                return <HelpIcon />;
        }
    };

    return (
        <div className="PageHeaderModule">
            <div className="howto-list-header-header">
                <span className="content-header">
                    HOW TO <FilterIcon />
                </span>
            </div>

            <div className="option-wrapper">
                <div className="option-left">
                    <span className="questions-number-span"> {question_count} </span>
                    <span className="question-descript-span"> &nbsp; 개의 질문이 있습니다</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="option-right">
                    <span id="search" onClick={toggleSearchBar}>
                        검색 <SearchIcon style={{ fontSize: "18px" }} id="clickable-icon" />
                    </span>
                    &nbsp;&nbsp;
                    <span id="filter" onClick={toggleFilter}>
                        필터 <BrightnessLowIcon style={{ fontSize: "18px" }} id="clickable-icon" />
                    </span>
                </div>
            </div>

            <div className="serach-bar-collapse-wrapper">
                <Collapse isOpen={filterIsOpen}>
                    <div className="filter-wrapper">
                        <div className="filter-header">
                            <div className="filter-item">
                                <BrightnessLowIcon style={{ fontSize: "18px" }} />
                            </div>
                            <FilterItem content="최신순" type="date" />
                            <FilterItem content="조회순" type="views" />
                            <FilterItem content="화제순" type="answerCount" />
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
            <div className="mobile-only new-question">
                <a href="/newquestion">
                    <Button style={{ width: "100%", fontSize: "11px", marginTop: "8px" }} color="info">
                        새 질문
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default PageHeaderModule;
