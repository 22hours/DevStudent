import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HowToTemplate.css';
import HowToSidebarTemplate from '../../HowToSidebar/HowToSidebarTemplate/HowToSidebarTemplate';
import Pagination from '@material-ui/lab/Pagination';


const HowToTemplate = ({children,hot,tag,handleNewQuestion}) => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={9} className="howto-wrapper">{children}
                    </Col>
                    <Col md={3} ><HowToSidebarTemplate hot={hot} tag={tag} handleNewQuestion={handleNewQuestion}></HowToSidebarTemplate></Col>
                </Row>
            </Container>
            <Container>
                <Pagination className="howto-page-navigater" count={15} variant="outlined" shape="rounded"/>
            </Container>
        </React.Fragment>
    );
}
export default HowToTemplate;