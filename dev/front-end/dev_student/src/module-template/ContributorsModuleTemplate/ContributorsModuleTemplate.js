import React from "react";
import "./ContributorsModuleTemplate.css";
import { Container } from "reactstrap";

import damin from "img/devnote/damin.png";
import hjg from "img/devnote/hjg.png";
import hyobin from "img/devnote/hyobin.png";
import winterlood from "img/devnote/winterlood.png";

const ContributorsModuleTemplate = () => {
    return (
        <div className="ContributorsModuleTemplate">
            <Container>
                <div className="header-row">
                    <div className="header">개발자들</div>
                </div>
                <div className="item-row">
                    <div className="item-wrapper">
                        <div className="item">
                            <img src={winterlood} />
                        </div>
                        <div className="item">
                            <img src={damin} />
                        </div>
                        <div className="item">
                            <img src={hjg} />
                        </div>
                        <div className="item">
                            <img src={hyobin} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default ContributorsModuleTemplate;
