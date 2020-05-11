import React, { useState, useEffect } from "react";
import "./HowToKanbanModuleTemplate.css";
import { Container } from "reactstrap";
import { useQuery } from "react-apollo";

//utils
import { timeForToday } from "util/time";

//atoms
import GradeAvatar from "atom/GradeAvatar/GradeAvatar";
import RankAvatar from "atom/RankAvatar/RankAvatar";

//queries
import { findAllQuestions } from "query/queries";

//icons
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const KanbanItem = (props) => {
    return (
        <div className="KanbanItem">
            <div className="item-row">
                <div className="item-col profile-col">
                    <img src={RankAvatar(props.rank + 1)}></img>
                </div>
                <div className="item-col about-col">
                    <div className="title-row">
                        <a href={"/howto/question/" + props._id}>{props.title}</a>
                    </div>
                    <div className="preview-row">{props.previews}</div>
                </div>
            </div>
            <div className="item-row bottom">
                <div className="stats-row">
                    <VisibilityIcon style={{ fontSize: "13px", color: "gray" }} /> {props.views}&nbsp;&nbsp;
                    <TrendingUpIcon style={{ fontSize: "13px", color: "gray" }} /> {props.answerCount}&nbsp;&nbsp;
                    <ThumbUpIcon style={{ fontSize: "13px", color: "gray" }} /> {props.likesCount}
                </div>
                <div className="author-row">
                    <img id="grade-avatar" src={GradeAvatar(props.author?.grade)}></img>
                    &nbsp;
                    <span id="nickname">{props.author?.nickname}</span>
                </div>
            </div>
        </div>
    );
};

const KanbanItemProvider = ({ type }) => {
    const { loading, error, data } = useQuery(findAllQuestions, { variables: { param: type, requiredCount: 3 } });
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

const HowToKanbanModuleTemplate = () => {
    return (
        <div className="HowToKanbanModuleTemplate">
            <Container className="kanban-wrapper">
                <div className="kanban-module-header">
                    <div className="kanban-header-wrapper">실시간 인기 차트</div>
                </div>
                <div className="kanban-col">
                    <div className="kanban-header">
                        <AccessTimeIcon />
                        <br /> 최신순
                    </div>
                    <div className="kanban-box">
                        <KanbanItemProvider type={"date"} />
                    </div>
                </div>
                <div className="kanban-col">
                    <div className="kanban-header">
                        <VisibilityIcon />
                        <br /> 조회순
                    </div>
                    <div className="kanban-box">
                        <KanbanItemProvider type={"views"} />
                    </div>
                </div>
                <div className="kanban-col">
                    <div className="kanban-header">
                        <TrendingUpIcon />
                        <br /> 답변순
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
