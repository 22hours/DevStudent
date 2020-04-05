import React from 'react'
import {Container, Alert} from 'reactstrap';
import './AlarmTemplate.css'
import '../AlarmItem/AlarmItem';
import AlarmItem from '../AlarmItem/AlarmItem';
const AlarmTemplate = () => {
    return (
        <Container>
            <div className="margin-top-3">
            <div>
                <span className="content-header">알림</span>
            </div>
            <div>
                <Alert color="info">6건의 알림이 있어요</Alert>
                <div className="alarm-list-wrapper">
                    <AlarmItem url={"1239"} content={"아 배고파"}/>
                    <AlarmItem url={"1239"} content={"아 배고파"}/>
                    <AlarmItem url={"1239"} content={"아 배고파"}/>
                    <AlarmItem url={"1239"} content={"아 배고파"}/>
                    <AlarmItem url={"1239"} content={"아 배고파"}/>

                </div>
            </div>
            </div>
        </Container>
    );
}

export default AlarmTemplate;