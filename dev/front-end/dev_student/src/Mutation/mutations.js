import { gql } from 'apollo-boost';

export const CREATE_QUESTION = gql`
    mutation createquestion($author:String!, $title:String!, $content:String!, $tags: [String]!
        ){
        createQuestion(author:$author, title:$title, content:$content, tags:$tags) {
                _id
        }
    }
`;

export const LOGIN = gql`
mutation logIn($_id:String!, $password:String!){
    logIn(_id : $_id, password : $password)
    {
        _id,
        password,
        token
    }
}
`;