import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import HowToItem from '../components/HowTo/HowToItem/HowToItem';
const FindAllQuestions = () => {
    var res = null;
    const QUERY = gql`
    query{
        findAllQuestions{
            title,
            views,
            answerCount,
            _id,
            author
            tags
        }
    }
    `;

    return(
        <Query query={QUERY}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error!</p>;
            res = <div>
            {
            data.findAllQuestions.map(({ _id, title, author, tags, date, content, answerCount, views}) => (
               <HowToItem
               id={_id}
               key={_id}
               author={author}
               title={title}
               answers={answerCount}
               views={views}
               date={date}>
               ></HowToItem>
            ))
            }
        </div>
        console.log("FindAllQuestionS!");
            return (
            res
            );
        }}
    </Query>
    );
}

export default FindAllQuestions;