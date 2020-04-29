import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-apollo";
import { COUNT_UNREAD_ALARMS } from "query/queries";
import CircularProgress from "@material-ui/core/CircularProgress";

const MyPageDropdownButtonModule = (props) => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const { user } = props;
    const { loading, error, data } = useQuery(COUNT_UNREAD_ALARMS, {
        variables: { nickname: user },
    });
    const btn_style = {
        background: "url('/img/mypage.png')no-repeat",
        width: "20px",
        height: "20px",
        border: "rgba(245, 245, 245, 0.8)",
        verticalAlign: "middle",
    };
    if (loading)
        return (
            <div>
                <CircularProgress />
            </div>
        );
    if (error) return <p>Error!</p>;
    console.log(data);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle style={btn_style}></DropdownToggle>
            <DropdownMenu right className="nav-smypage-dropdown-btn">
                <DropdownItem header>
                    <div style={{ fontSize: "16px" }}>{user}님</div>
                    <br></br>
                    <div>{localData?.email}</div>
                </DropdownItem>
                <DropdownItem style={{ fontFamily: "Do Hyeon" }}>
                    <Link to="/alarm"> 알림 {data.countUnreadAlarms.count}</Link>
                </DropdownItem>
                <Link to="/mypage">
                    <DropdownItem style={{ fontFamily: "Do Hyeon" }}>마이페이지</DropdownItem>
                </Link>
                <Link to="/logout">
                    <DropdownItem style={{ fontFamily: "Do Hyeon" }}>로그아웃</DropdownItem>
                </Link>
            </DropdownMenu>
        </Dropdown>
    );
};

export default MyPageDropdownButtonModule;
