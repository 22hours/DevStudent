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
            nickname
            schoolName
            date
        }
    }
`;

export const CREATE_ANSWER = gql`
    mutation createAnswer($question_id: String!, $author: String!, $content: String!) {
        createAnswer(question_id: $question_id, author: $author, content: $content) {
            _id
            author {
                email
                nickname
                point
                grade
                gitLink
                schoolName
                attendance
            }
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
            email
            nickname
            schoolName
            gitLink
            grade
            point
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

export const UPDATE_ADOPTED_ANSWER_ID = gql`
    mutation updateAdoptedAnswerId($question_id: String!, $answer_id: String!, $nickname: String!) {
        updateAdoptedAnswerId(question_id: $question_id, answer_id: $answer_id, nickname: $nickname) {
            title
            _id
            author {
                email
                nickname
                point
                grade
                gitLink
                schoolName
                attendance
            }
            tags
            date
            content
            previews
            answerCount
            likesCount
            isLiked
            views
            adoptedAnswerId
            likes {
                nickname
                status
            }
            comments {
                _id
                author
                content
                date
            }
            answers {
                _id
                author {
                    email
                    nickname
                    point
                    grade
                    gitLink
                    schoolName
                    attendance
                }
                content
                date
                likesCount
                isLiked
                comments {
                    _id
                    author
                    content
                    date
                }
                likes {
                    nickname
                    status
                }
            }
        }
    }
`;

export const CREATE_LIKE = gql`
    mutation createLike($question_id: String!, $answer_id: String!, $nickname: String!, $status: String!) {
        createLike(question_id: $question_id, answer_id: $answer_id, nickname: $nickname, status: $status) {
            likesCount
        }
    }
`;
