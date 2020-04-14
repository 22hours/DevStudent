import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import MypageTemplate from "page-template/MypageTemplate/MypageTemplate";
const logged = true;

const MyPage = () => {
    const [count, setCount] = useState("init");
    const [count2, setCount2] = useState("init2");

    useEffect(() => {
        console.log("hi this is my page");
    }, [count]);
    const handleIncrease = () => {
        setCount("hi");
    };
    const handleIncrease2 = () => {
        setCount2("hi2");
    };
    const handleDecrease = () => {
        setCount("my name");
    };
    const handleDecrease2 = () => {
        setCount2("my name2");
    };
    return <MypageTemplate />;
};

export default MyPage;
