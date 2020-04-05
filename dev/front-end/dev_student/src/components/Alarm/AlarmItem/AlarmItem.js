import React from 'react'
import {Link} from 'react-router-dom';
import './AlarmItem.css';
const AlarmItem = ({url,content}) =>{
    return(
        <div className="alarm-item-box">
                <Link>#{url}</Link> {content}
        </div>
    );
}

export default AlarmItem;