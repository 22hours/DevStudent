import React, { useState } from "react";
import "./HowToKanbanModuleTemplate.css";
import { Container } from "reactstrap";
import { useQuery } from "react-apollo";

//queries
import { findAllQuestions } from "query/queries";

//icons
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const KanbanItem = ({ title }) => {
    return <div className="KanbanItem">{title}</div>;
};

const KanbanItemProvider = (type) => {
    const { loading, error, data } = useQuery(findAllQuestions, { variables: { param: type, requiredCount: 5 } });
    const [item, setItem] = useState();
    if (loading) return <p>loading now</p>;
    if (error) return <p>error now</p>;
    setItem(data.findAllQuestion.map((it) => <KanbanItem key={it._id} title={it.title} />));
    return;
};

const TestKanbanProvider = () => {
    return <KanbanItem title={"title"} />;
};

const HowToKanbanModuleTemplate = () => {
    return (
        <div className="HowToKanbanModuleTemplate">
            <Container className="kanban-wrapper">
                <div className="kanban-col">
                    <div className="kanban-header">
                        <AccessTimeIcon />
                        <br /> Latest
                    </div>
                    <div className="kanban-box">
                        <TestKanbanProvider />
                    </div>
                </div>
                <div className="kanban-col">
                    <div className="kanban-header">
                        <VisibilityIcon />
                        <br /> Views
                    </div>
                    <div className="kanban-box">
                        <TestKanbanProvider />
                    </div>
                </div>
                <div className="kanban-col">
                    <div className="kanban-header">
                        <TrendingUpIcon />
                        <br /> Answers
                    </div>
                    <div className="kanban-box">
                        <TestKanbanProvider />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HowToKanbanModuleTemplate;
