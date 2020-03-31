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