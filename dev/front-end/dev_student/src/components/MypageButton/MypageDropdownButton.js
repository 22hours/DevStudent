import React, { useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const MypageDropdownButton = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const {user} = props;
  const img_style = {
    marginRight:'4px'
   };

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
             알림
          </DropdownItem>
          <DropdownItem style={{fontFamily:'Do Hyeon'}}>
             마이페이지
          </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  );
}

export default MypageDropdownButton;