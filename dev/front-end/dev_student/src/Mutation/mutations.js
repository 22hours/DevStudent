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
            gitLink
            grade
            point
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
    mutation createAnswer($question_id: String!, $author: String!, $content: String!) {
        createAnswer(question_id: $question_id, author: $author, content: $content) {
            _id
            author
            content
            date
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($email: String!, $password: String!, $schoolName: String!) {
        createUser(email: $email, password: $password, schoolName: $schoolName) {
            email
            authState
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
            nickname
            schoolName
            date
            authState
            accessToken
            refreshToken
        }
    }
`;

export const UPDATE_USER_INFO = gql`
    mutation updateUserInfo($nickname: String!, $gitLink: String!) {
        updateUserInfo(nickname: $nickname, gitLink: $gitLink) {
            gitLink
        }
    }
`;

export const CREATE_NICKNAME = gql`
    mutation createNickname($email: String!, $nickname: String!) {
        createNickname(email: $email, nickname: $nickname) {
            email
            nickname
            schoolName
            date
            authState
            accessToken
            gitLink
            grade
            point
        }
    }
`;
