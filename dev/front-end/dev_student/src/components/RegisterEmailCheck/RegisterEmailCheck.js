import React,{useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import {Button} from 'reactstrap';
import { checkDuplicate } from '../../query/queries';

const RegisterEmailCheck = ({email}) => {

    const [check,setCheck] = useState('');


    const { loading, error, data } = useQuery(checkDuplicate, {
        variables: {_id:email},  
    });

    const emailCheck = () =>{
        if (loading) return <p>Loading ...</p>;
        if (error) return <p>Error!</p>;
        data.checkDuplicate.map(({ isit }) => (
           check = {isit}
        ))
        if(check=="true"){ alert("사용 가능한 이메일 입니다.");}
            else{alert("이미 가입된 이메일 입니다.");
            return;
        }
    }

    return(
        <Button color="info" className="register-email-check-btn" 
            onClick={()=>{
                emailCheck()
            }}>확인</Button>
    );
}
export default RegisterEmailCheck;