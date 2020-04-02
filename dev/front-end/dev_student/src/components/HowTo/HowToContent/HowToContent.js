import React, { useContext } from 'react';
import { Container } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import HowToContentHeader from '../HowToContentHeader/HowToContentHeader';
import HowToReply from '../HowToReply/HowToReply';
import './HowToContent.css'
import { findQuestionBy_id_Query } from '../../../query/queries'
import UserContext from '../../../Context/UserContext';
import HowToContentQABox from '../HowToContentQABox/HowToContentQABox';
import ReactMarkdown from 'react-markdown'
import ReplyAnswer from '../ReplyAnswer/ReplyAnswer';
const HowToContent = ({ match }) => {
    const { user } = useContext(UserContext);
    const { loading, error, data } = useQuery(findQuestionBy_id_Query, {
        variables: { _id: match.params.id },
    });
    if (loading) return <p>Loading ...</p>;
    var mine = false;
    if (data.findQuestionBy_id.author === user) {
        mine = true;
    }
    const replies = data.findQuestionBy_id.answers.map(({ _id, author, content, date }) => (
        <HowToReply
            _id={_id}
            key={_id}
            author={author}
            date={date}
        />
    ))
    return (
        <React.Fragment>
            <div className="left-line"></div>
            
            <Container className="margin-top-3 how-to-content-header">
                <HowToContentHeader
                    mine={mine}
                    _id={data.findQuestionBy_id._id}
                    title={data.findQuestionBy_id.title}
                    author={data.findQuestionBy_id.author}
                    date={data.findQuestionBy_id.date}
                    views={data.findQuestionBy_id.views}
                ></HowToContentHeader>
            </Container>

            <Container className="how-to-content margin-top-3">
                <HowToContentQABox
                isQuestion={"Q"}
                author={data.findQuestionBy_id.author}
                date={data.findQuestionBy_id.date}
                likes={"3"}
                content={data.findQuestionBy_id.content}></HowToContentQABox>
                 <HowToContentQABox
                isQuestion={"A"}
                author={"winterlood"}
                date={"2020-04-02"}
                likes={"3"}
                content={"이렇게 해보시면 어떨까요?"}></HowToContentQABox>
            </Container>
            <Container className="how-to-reply-answer-wrapper">
                <ReplyAnswer/>
            </Container>
        </React.Fragment>
    );
}


// const HowToContent = ({ match }) => (
//     <Query query={findQuestionBy_id_Query} variables={match.params.id}>
//         {({ loading, error, data }) => {
//             if (loading) return null;
//             if (error) return `Error!`;
//             return (
//                 // Object.entries(data.findQuestionBy_id)

//                 <React.Fragment>
//                     <Container className="margin-top-3 how-to-content-header">
//                         <p>{data.findQuestionBy_id.title}</p>
//                         <HowToContentHeader 
//                         title={data.findQuestionBy_id.title}
//                         ></HowToContentHeader>
//                     </Container>
//                     <Container className="how-to-content margin-top-3">
//                         <ReactMarkdown
//                             source={"markdown"}
//                             escapeHtml={false}
//                         />
//                     </Container>
//                     <Container>
//                         <HowToReply contents={
//                             "    for(int i=0; i<=n.length(); i++)\n이거왜 안되죠? 진짜모르겠음 ;;;"
//                         }></HowToReply>
//                     </Container>
//                 </React.Fragment>
//                     );
//                 }}
//     </Query>
// );
export default HowToContent;
