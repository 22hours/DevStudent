import React , {useContext}from 'react'
import AlarmTemplate from '../components/Alarm/AlarmTemplate/AlarmTemplate';
import {FIND_ALL_ALARMS} from '../query/queries'
import UserContext from '../Context/UserContext';
import {useQuery} from 'react-apollo';
const Alarm = () =>{
    const {user} = useContext(UserContext);
    const {loading,error,data} = useQuery(FIND_ALL_ALARMS, {
        variables: { nickname: user, pageNum : 1, requiredCount : 10}  
      });
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error!</p>;  
    return(
      <AlarmTemplate alarms = {data.findAllAlarms}/>
    );
}

export default Alarm;