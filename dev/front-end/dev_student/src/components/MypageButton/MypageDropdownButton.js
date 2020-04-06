import React, { useState, useEffect} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {useQuery} from 'react-apollo';
import {COUNT_UNREAD_ALARMS} from '../../query/queries';
const MypageDropdownButton = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const {user} = props;
  const img_style = {
    marginRight:'4px'
   };
  //  useEffect(()=>{

  //  },[1])
   const {loading,error,data} = useQuery(COUNT_UNREAD_ALARMS, {
    variables: { user_id: user}  
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error!</p>;  
  console.log(data);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={{backgroundColor: '#F8F9FA', borderColor:'#F8F9FA'}}>
        <img width="30px" height="30px" style={img_style} src="/img/mypage.png" ></img>
        </DropdownToggle>
        <DropdownMenu right className="nav-smypage-dropdown-btn">
          <DropdownItem header>
            <div style={{fontSize: '16px'}}>
              {user}님
            </div>
            <br></br>
            <div>
              hbin12212@gmail.com
            </div>
          </DropdownItem>
          <DropdownItem style={{fontFamily:'Do Hyeon'}}>
           <Link to="/alarm">  알림 {data.countUnreadAlarms.count}</Link>
          </DropdownItem>
          <DropdownItem style={{fontFamily:'Do Hyeon'}}>
             마이페이지
          </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  );
}

export default MypageDropdownButton;