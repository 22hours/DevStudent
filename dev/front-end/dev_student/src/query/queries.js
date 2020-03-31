import { gql } from 'apollo-boost';

export const findQuestionBy_id_Query = gql`
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


export const findAllQuestions = gql`
query findAllQuestion($param : String){
    findAllQuestions(param : $param){
        title,
        views,
        answerCount,
        _id,
        author,
        previews,
        tags
    }
}
`;
