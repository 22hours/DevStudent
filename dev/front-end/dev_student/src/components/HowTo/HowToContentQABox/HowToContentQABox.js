import React from 'react';
import MarkdownContent from '../../MarkdownContent/MarkdownContent';
import './HowToContentQABox.css'
const HowToContentQABox = ({ id, isQuestion, author, date, likes, content }) => {
    const IsQorAOutter = () =>{
        if(isQuestion=="Q"){
            return (
                <div className="is-question-box-q">
                Q
            </div>            
            );
        }
        else{
            return (
                <div className="is-question-box-a">
                A
            </div>            
            );
        }
    }

    const IsQorAInner = () =>{
        if(isQuestion=="Q"){
            return (
                <div className="header-box-is-question-box-q">
                Q
            </div>            
            );
        }
        else{
            return (
                <div className="header-box-is-question-box-a">
                A
            </div>            
            );
        }
    }
    return (
        <React.Fragment>
            <div>
            <IsQorAOutter/>
            <div className="question-box">
                <div className="header-box">
                    <IsQorAInner/>
                    <span>{author}</span>
                </div>
                <div className="main-box">
                    <MarkdownContent content={content}/>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default HowToContentQABox;