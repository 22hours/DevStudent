import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import CountAlarmModule from "module/CountAlarmModule/CountAlarmModule";
import "./MypageDropdownButtonModule.css";
// icon
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const MyPageDropdownButtonModule = (props) => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const { user } = props;

    const btn_style = {
        backgroundColor: "transparent",
        border: "0px",
        padding: "0px",
        boxShadow: "none",
    };

    const MemberArea = ({ nickname }) => {
        return (
            <span id="nickname-span">
                {nickname}
                <ArrowDropDownIcon />
            </span>
        );
    };

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="user-nickname-btn" style={btn_style}>
                <MemberArea nickname={"winterlood"} />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>
                    <div style={{ fontSize: "16px" }}>{localData?.nickname}님</div>
                    <br></br>
                    <div>{localData?.email}</div>
                </DropdownItem>
                <DropdownItem style={{ fontSize: "14px" }}>
                    <CountAlarmModule user={localData?.nickname} />
                </DropdownItem>
                <Link to="/mypage">
                    <DropdownItem style={{ fontSize: "14px" }}>마이페이지</DropdownItem>
                </Link>
                <Link to="/logout">
                    <DropdownItem style={{ fontSize: "14px" }}>로그아웃</DropdownItem>
                </Link>
            </DropdownMenu>
        </Dropdown>
    );
};

export default MyPageDropdownButtonModule;
