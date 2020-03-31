import React, {useContext} from 'react';
import UserContext from '../../Context/UserContext';
const AuthDebug = () => {
    const user = window.sessionStorage.getItem('user');
    if(user){
        return(
        <div><p>{user}</p></div>
        );
    }
    else{
        return(
        <div><p>login 안되어있습니다.</p></div>
        );
    }
}

export default AuthDebug;