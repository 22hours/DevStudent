import React from 'react';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import HowToItem from '../components/HowTo/HowToItem/HowToItem';
const FindQuestionById = ({ _id }) => {
    var res = null;
    const QUERY_Q = gql`
    query findQuestionBy_id($_id: String){
        findQuestionBy_id(_id: $_id){
            _id,
            title,
            author,
            tags,
            date,
            content,
            answerCount,
            views,
            solved,
            comments{
                _id,
                author,
                content,
                date
            },
            answers{
                _id,
                author,
                content,
                date
            }
        }
    }
    `;
    return (

        <Query query={QUERY_Q} variables={{ _id }}>
            {({ loading, error, data }) => {
                        console.log(Object.entries(data.findQuestionBy_id) );
                        console.log(Object.entries(data.findQuestionBy_id) );
                        console.log(Object.entries(data.findQuestionBy_id) );
                        console.log(Object.entries(data.findQuestionBy_id) );
                        console.log("FindQuestionById!");
        
        
                if (loading) return null;
                if (error) return `Error!`;
        
                return (
                    // Object.entries(data.findQuestionBy_id)
                    data.findQuestionBy_id
                );
            }}
        </Query>
    );
}

export default FindQuestionById;