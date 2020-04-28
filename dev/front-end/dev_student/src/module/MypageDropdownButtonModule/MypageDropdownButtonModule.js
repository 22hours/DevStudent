import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-apollo";
import { COUNT_UNREAD_ALARMS } from "../../query/queries";
const MyPageDropdownButtonModule = (props) => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const { user } = props;
    const img_style = {
        marginRight: "4px",
    };
    const { loading, error, data } = useQuery(COUNT_UNREAD_ALARMS, {
        variables: { nickname: user },
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;
    console.log(data);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle style={{ backgroundColor: "#F8F9FA", borderColor: "#F8F9FA" }}>
                <img width="18px" height="20px" style={img_style} src="/img/user_area_button_black.png"></img>
            </DropdownToggle>
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
