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


export const findAllQuestionsPage = gql`
query findAllQuestion($param : String, $pageNum: Int, $requiredCount: Int){
    findAllQuestions(param : $param, pageNum:$pageNum, requiredCount: $requiredCount){
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


export const findAllQuestionsByViews = gql`
query findAllQuestion($param : String, $requiredCount:Int){
    findAllQuestions(param : $param, requiredCount: $requiredCount){
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

export const FIND_ALL_ALARMS = gql`
query findAllAlarms(
    $user_id : String!, 
    $pageNum : Int, 
    $requiredCount : Int
){
    findAllAlarms(
        user_id : $user_id, 
        pageNum : $pageNum, 
        requiredCount : $requiredCount
        ){
        _id
        question_id
        user_id
        respondent
        content
        date
        read
    }
}
`;

export const COUNT_UNREAD_ALARMS = gql`
query countUnreadAlarms($user_id : String!){
    countUnreadAlarms(user_id : $user_id){
        count
    }
}
`;

export const checkDuplicate = gql`
query checkDuplicate($_id: String){
    checkDuplicate(_id: $_id){
        isit
    }
}`;

