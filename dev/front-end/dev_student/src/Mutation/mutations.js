import { gql } from "apollo-boost";

export const CREATE_QUESTION = gql`
    mutation createquestion($author: String!, $title: String!, $content: String!, $tags: [String]!) {
        createQuestion(author: $author, title: $title, content: $content, tags: $tags) {
            _id
        }
    }
`;

export const LOGIN = gql`
    mutation loginToServer($email: String!, $password: String!) {
        loginToServer(email: $email, password: $password) {
            email
            password
            nickname
            schoolName
            date
            authState
            accessToken
            refreshToken
        }
    }
`;

export const UPDATE_USER_AUTH_STATE = gql`
    mutation updateUserAuthState($authState: String!) {
        updateUserAuthState(authState: $authState) {
            email
        }
    }
`;

export const CREATE_ANSWER = gql`
    mutation createAnswer($token: String!, $question_id: String!, $author: String!, $content: String!) {
        createAnswer(token: $token, question_id: $question_id, author: $author, content: $content) {
            _id
            author
            content
            date
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($email: String!, $password: String!, $nickname: String!, $schoolName: String!) {
        createUser(email: $email, password: $password, nickname: $nickname, schoolName: $schoolName) {
            email
            nickname
        }
    }
`;

export const CHECK_DUPLICATE_EMAIL = gql`
    mutation checkDuplicateEmail($email: String!) {
        checkDuplicateEmail(email: $email) {
            count
        }
    }
`;

export const CHECK_DUPLICATE_NICKNAME = gql`
    mutation checkDuplicateNickname($nickname: String!) {
        checkDuplicateNickname(nickname: $nickname) {
            count
        }
    }
`;

export const CREATE_COMMENT = gql`
    mutation createComment($question_id: String!, $answer_id: String!, $author: String!, $content: String!) {
        createComment(question_id: $question_id, answer_id: $answer_id, author: $author, content: $content) {
            _id
            author
            content
            date
        }
    }
`;

export const REISSUANCE_ACCESS_TOKEN = gql`
    mutation reissuanceAccessToken($nickname: String!) {
        reissuanceAccessToken(nickname: $nickname) {
            email
            password
            nickname
            schoolName
            date
            authState
            accessToken
            refreshToken
        }
    }
`;
