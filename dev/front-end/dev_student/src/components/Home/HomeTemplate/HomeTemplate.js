import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HomeTamplate.css'
import FlipText from '../../FlipText/FlipText';
const HomeTamplate = () => {
    return(
       <div className="home-root-wrapper">
        <FlipText></FlipText>
       </div>
    );
}

export default HomeTamplate;