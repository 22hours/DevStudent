import React from 'react';
import {Container} from 'reactstrap';
import HowToListHeaderTemplate from '../HowToListHeaderTemplate/HowToListHeaderTemplate';
import Pagination from '@material-ui/lab/Pagination';

const HowToListTemplate = ({questionCount,questionList,question_count,tags,param,setParam}) => {
    return (
        <React.Fragment>
            <Container className='margin-top-3 red-border'>
                <HowToListHeaderTemplate 
                    setParam={setParam}           
                    param={param} 
                    tags={tags} question_count={questionCount}>'
                </HowToListHeaderTemplate>
            </Container>
            <div>
                {questionList}
            </div>
            <Container className='margin-top-3 red-border'/>
            <Container>
                <Pagination className="howto-page-navigater" count={15} variant="outlined" shape="rounded"/>
            </Container>
        </React.Fragment>
    );
}
export default HowToListTemplate;