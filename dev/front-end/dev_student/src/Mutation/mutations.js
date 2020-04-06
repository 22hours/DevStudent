import { gql } from 'apollo-boost';

export const CREATE_QUESTION = gql`
    mutation createquestion($token:String!, $author:String!, $title:String!, $content:String!, $tags: [String]!
        ){
        createQuestion(token: $token, author:$author, title:$title, content:$content, tags:$tags) {
                _id
        }
    }
`;

export const LOGIN = gql`
mutation LoginToServer($_id:String!, $password:String!){
    LoginToServer(_id : $_id, password : $password)
    {
        token
    }
}
`;

export const UPDATE_USER_AUTH_STATE = gql`
mutation updateUserAuthState($authState : String!){
    updateUserAuthState(authState : $authState)
}
`;

export const CREATE_ANSWER = gql`
mutation createAnswer(
    $token : String!,
    $question_id : String!,
    $author : String!,
    $content : String!,
    ){
    createAnswer
    (
    token : $token,
    question_id : $question_id,
    author : $author,
    content : $content
    )
    {
        _id
        author
        content
        date
    }
}
`;

export const CREATE_USER = gql`
mutation createUser(
    $_id: String!,
    $password: String!,
    $email: String!,
    $schoolName: String!, $nickName: String!){
        createUser(_id: $_id, password: $password, email: $email, schoolName: $schoolName, nickName: $nickName){
        }
    }
`;
