import React, { useState, useEffect } from "react";
import "./HowToKanbanModuleTemplate.css";
import { Container } from "reactstrap";
import { useQuery } from "react-apollo";

//utils
import { timeForToday } from "util/time";

//atoms
import GradeAvatar from "atom/GradeAvatar/GradeAvatar";
import RankAvatar from "atom/RankAvatar/RankAvatar";

// //queries
// import { FIND_HOME_KANBAN } from "query/queries";

//icons
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import { POST, FIND_HOME_KANBAN } from "rest";

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

const TotalKanbanItemProvider = ({ data }) => {
    const [date, setDate] = useState();
    const [views, setViews] = useState();
    const [answerCount, setAnserCount] = useState();
    useEffect(() => {
        setDate(data?.date);
        setViews(data?.views);
        setAnserCount(data?.answerCount);
    }, [data]);

    return (
        <React.Fragment>
            <div className="pc-only">
                <div className="kanban-col">
                    <div className="kanban-header">
                        <AccessTimeIcon />
                        <br /> 최신순
                    </div>
                    <div className="kanban-box">
                        <KanbanRenderer data={date} />
                    </div>
                </div>
                <div className="kanban-col">
                    <div className="kanban-header">
                        <VisibilityIcon />
                        <br /> 조회순
                    </div>
                    <div className="kanban-box">
                        <KanbanRenderer data={views} />
                    </div>
                </div>
                <div className="kanban-col">
                    <div className="kanban-header">
                        <TrendingUpIcon />
                        <br /> 답변순
                    </div>
                    <div className="kanban-box">
                        <KanbanRenderer data={answerCount} />
                    </div>
                </div>
            </div>
            <div className="mobile-only">
                <div className="kanban-row">
                    <div className="kanban-header">
                        <AccessTimeIcon />
                        <br /> 최신순
                    </div>
                    <div className="kanban-box">
                        <KanbanRenderer data={date} />
                    </div>
                </div>
                <div className="kanban-row">
                    <div className="kanban-header">
                        <VisibilityIcon />
                        <br /> 조회순
                    </div>
                    <div className="kanban-box">
                        <KanbanRenderer data={views} />
                    </div>
                </div>
                <div className="kanban-row">
                    <div className="kanban-header">
                        <TrendingUpIcon />
                        <br /> 답변순
                    </div>
                    <div className="kanban-box">
                        <KanbanRenderer data={answerCount} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

const KanbanRenderer = ({ data }) => {
    const [item, setItem] = useState();
    useEffect(() => {
        setItem(data?.map((it, idx) => <KanbanItem rank={idx} key={it._id} {...it} />));
    }, [data]);
    return <React.Fragment>{item}</React.Fragment>;
};

const HowToKanbanModuleTemplate = () => {
    const [kanbanData, setKanbanData] = useState();
    const getKanban = async () => {
        const data = await POST("post", FIND_HOME_KANBAN, { requiredCount: 3 });
        setKanbanData(data);
    };
    useEffect(() => {
        getKanban();
    }, [1]);
    return (
        <div className="HowToKanbanModuleTemplate">
            <Container className="kanban-wrapper">
                <div className="kanban-module-header">
                    <div className="kanban-header-wrapper">실시간 인기 차트</div>
                </div>
                <TotalKanbanItemProvider data={kanbanData} />
            </Container>
        </div>
    );
};

export default HowToKanbanModuleTemplate;
