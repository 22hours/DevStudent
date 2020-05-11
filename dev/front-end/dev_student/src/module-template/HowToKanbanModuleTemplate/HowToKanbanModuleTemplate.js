import React, { useState, useEffect } from "react";
import "./HowToKanbanModuleTemplate.css";
import { Container } from "reactstrap";
import { useQuery } from "react-apollo";

//utils
import { timeForToday } from "util/time";

//atoms
import GradeAvatar from "atom/GradeAvatar/GradeAvatar";

//queries
import { findAllQuestions } from "query/queries";

//icons
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const KanbanItem = (props) => {
    return (
        <div className="KanbanItem">
            <div className="item-row">
                <div className="item-col profile-col">
                    <img src={GradeAvatar(props.author?.grade)}></img>
                </div>
                <div className="item-col about-col">
                    <div className="title-row">
                        <a href="/howto">{props.title}</a>
                    </div>
                    <div className="date-row">
                        {timeForToday(props.date)}
                        {props.rank + 1}
                    </div>
                </div>
            </div>
            <div className="item-row">
                <div className="author-row">
                    <img id="grade-avatar" src={GradeAvatar(props.author?.grade)}></img>
                    &nbsp;&nbsp;
                    <span id="nickname">{props.author?.nickname}</span>
                </div>
            </div>
        </div>
    );
};

const KanbanItemProvider = ({ type }) => {
    const { loading, error, data } = useQuery(findAllQuestions, { variables: { param: type, requiredCount: 5 } });
    if (loading) return <p>loading now</p>;
    if (error) return <p>error now</p>;
    return (
        <React.Fragment>
            <KanbanRenderer data={data?.findAllQuestions} />
        </React.Fragment>
    );
};

const KanbanRenderer = ({ data }) => {
    const [item, setItem] = useState();
    useEffect(() => {
        setItem(data?.map((it, idx) => <KanbanItem rank={idx} key={it._id} {...it} />));
    }, [1]);
    return <React.Fragment>{item}</React.Fragment>;
};

const TestKanbanProvider = () => {
    return (
        <React.Fragment>
            <KanbanItem
                title={"titledddddddddddddddddddddddd"}
                date={"방금전"}
                author={{
                    nickname: "nickname",
                    grade: "short",
                    point: "130",
                }}
            />
            <KanbanItem title={"title"} />
            <KanbanItem title={"title"} />
            <KanbanItem title={"title"} />
        </React.Fragment>
    );
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
                        <KanbanItemProvider type={"date"} />
                    </div>
                </div>
                <div className="kanban-col">
                    <div className="kanban-header">
                        <VisibilityIcon />
                        <br /> Views
                    </div>
                    <div className="kanban-box">
                        <KanbanItemProvider type={"views"} />
                    </div>
                </div>
                <div className="kanban-col">
                    <div className="kanban-header">
                        <TrendingUpIcon />
                        <br /> Answers
                    </div>
                    <div className="kanban-box">
                        <KanbanItemProvider type={"answerCount"} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HowToKanbanModuleTemplate;
