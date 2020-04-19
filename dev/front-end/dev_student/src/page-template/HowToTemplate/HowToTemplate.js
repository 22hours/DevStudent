import React from "react";
import { Container } from "reactstrap";
import "./HowToTemplate.css";

// component
import HowToSidebarComponent from "component/HowToSidebarComponent/HowToSidebarComponent";

const HowToTemplate = ({ children, tag, handleNewQuestion }) => {
    return (
        <React.Fragment>
            <div className="HowToTemplate">
                <Container>
                    <div className="howto-main-col">{children}</div>
                    <div className="howto-side-col">
                        <HowToSidebarComponent tag={tag} handleNewQuestion={handleNewQuestion}></HowToSidebarComponent>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};
export default HowToTemplate;
