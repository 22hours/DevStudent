import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import CountAlarmModule from "module/CountAlarmModule/CountAlarmModule";
import "./MypageDropdownButtonModule.css";

// icon
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const RenderCountAlarmModule = ({ dropdownOpen }) => {
    const localData = JSON.parse(localStorage.getItem("user"));

    if (dropdownOpen) {
        return <CountAlarmModule user={localData?.nickname} />;
    } else {
        return <div>Error!</div>;
    }
};

const MyPageDropdownButtonModule = (props) => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user } = props;

    const toggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

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
        <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{ display: "inline" }}>
            <DropdownToggle className="user-nickname-btn" style={btn_style}>
                <MemberArea nickname={localData?.nickname} />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>
                    <div style={{ fontSize: "15px" }}>{localData?.nickname}님</div>
                    <br></br>
                    <div>{localData?.email}</div>
                </DropdownItem>
                <Link to="/alarm">
                    <DropdownItem style={{ fontSize: "15px", color: "#6c757d" }}>
                        알림
                        <RenderCountAlarmModule dropdownOpen={dropdownOpen} />
                    </DropdownItem>
                </Link>
                <Link to="/mypage">
                    <DropdownItem style={{ fontSize: "14px", color: "#6c757d" }}>마이페이지</DropdownItem>
                </Link>
                <Link to="/logout">
                    <DropdownItem style={{ fontSize: "14px", color: "#6c757d" }}>로그아웃</DropdownItem>
                </Link>
            </DropdownMenu>
        </Dropdown>
    );
};

export default MyPageDropdownButtonModule;
