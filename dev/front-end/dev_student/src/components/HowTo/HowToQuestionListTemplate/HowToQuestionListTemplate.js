import React from "react";
import HowToItem from "../HowToItem/HowToItem";
const HowToQuestionListTemplate = () => {
    return (
        <React.Fragment>
            <HowToItem
                key={1}
                author={"신다민"}
                title={"이거 어떻게 하나요?"}
                asked={"2020-20-20"}
                answers={"20"}
                views={"50"}
                preview={"제가 이번에 객체지향 패러다임 수업을 듣게 되었는데, 글쎄 여기서말이에요..."}
            ></HowToItem>
            <HowToItem
                key={2}
                author={"신다민"}
                title={"이거 어떻게 하나요?"}
                asked={"2020-20-20"}
                views={"1421"}
                answers={"0"}
            ></HowToItem>
            <HowToItem key={3} author={"신다민"} title={"이거 어떻게 하나요?"} asked={"2020-20-20"}></HowToItem>
            <HowToItem key={4} author={"신다민"} title={"이거 어떻게 하나요?"} asked={"2020-20-20"}></HowToItem>
        </React.Fragment>
    );
};

export default HowToQuestionListTemplate;
