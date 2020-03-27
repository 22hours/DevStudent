import React from 'react';
import {Container} from 'reactstrap';
import HowToListHeaderTemplate from '../HowToListHeaderTemplate/HowToListHeaderTemplate';
const HowToListTemplate = ({questionList,question_count,tags}) => {
   
    // const questionList = questions.map(
    //     ({id,author,title,previews,answers,views,date}) => (
    //         <HowToItem
    //         id={id}
    //         key={id}
    //         author={author}
    //         title={title}
    //         previews={previews}
    //         answers={answers}
    //         views={views}
    //         date={date}>
    //         </HowToItem>
    //     )
    // )

    return (
        <React.Fragment>
        <Container className='margin-top-3 red-border'>
           <HowToListHeaderTemplate tags={tags} question_count={question_count}></HowToListHeaderTemplate>
        </Container>
 
        <div >
           {questionList}
        </div>
        <Container className='margin-top-3 red-border'>
        </Container>
        </React.Fragment>
    );
}

export default HowToListTemplate;