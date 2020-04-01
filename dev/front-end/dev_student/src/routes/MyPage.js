import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';

const logged = true;

const MyPage = () => {
    const [count,setCount] = useState('init');
    const [count2,setCount2] = useState('init2');

    useEffect(()=>{
        console.log("hi this is my page");
    },[count])
    const handleIncrease = () => {
        setCount("hi");
    }
    const handleIncrease2 = () => {
        setCount2("hi2");
    }
    const handleDecrease = () =>{
        setCount("my name");
    }
    const handleDecrease2 = () =>{
        setCount2("my name2");
    }
    return (
        <div>
            {
                !logged && <Redirect to="/login"/>
            }
            내 페이지
            <h1>{count}</h1>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
            <h1>{count2}</h1>
            <button onClick={handleIncrease2}>+</button>
            <button onClick={handleDecrease2}>-</button>
      
        </div>
    );
};

export default MyPage;