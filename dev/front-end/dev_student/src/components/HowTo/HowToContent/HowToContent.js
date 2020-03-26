import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { Query } from 'react-apollo';
import HowToContentHeader from '../HowToContentHeader/HowToContentHeader';
import HowToReply from '../HowToReply/HowToReply';
import './HowToContent.css'
import ReactMarkdown from 'react-markdown'
import findQuestionBy_id_Query from '../../../query/queries'

const HowToContent = ({match}) => {
    const { loading, error, data } = useQuery(findQuestionBy_id_Query, {
        variables: { _id: match.params.id },
      });
      if (loading) return <p>Loading ...</p>;
    return (
        <React.Fragment>
        <Container className="margin-top-3 how-to-content-header">
            <HowToContentHeader 
            title={data.findQuestionBy_id.title}
            author={data.findQuestionBy_id.author}
            date={data.findQuestionBy_id.date}
            views={data.findQuestionBy_id.views}
            ></HowToContentHeader>
        </Container>
        <Container className="how-to-content margin-top-3">
            <ReactMarkdown
                source={data.findQuestionBy_id.content}
                escapeHtml={false}
            />
        </Container>
        <Container>
            <HowToReply contents={
                "    for(int i=0; i<=n.length(); i++)\n이거왜 안되죠? 진짜모르겠음 ;;;"
            }></HowToReply>
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
