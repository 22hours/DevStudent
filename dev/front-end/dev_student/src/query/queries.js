import { gql } from "apollo-boost";

export const findQuestionBy_id_Query = gql`
    query findQuestionBy_id($_id: String) {
        findQuestionBy_id(_id: $_id) {
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

export const findAllQuestionsPage = gql`
    query findAllQuestion($param: String, $pageNum: Int, $requiredCount: Int) {
        findAllQuestions(param: $param, pageNum: $pageNum, requiredCount: $requiredCount) {
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
        }
    }
`;

export const findAllQuestions = gql`
    query findAllQuestion($param: String) {
        findAllQuestions(param: $param) {
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
        }
    }
`;

export const findAllQuestionsByViews = gql`
    query findAllQuestion($param: String, $requiredCount: Int) {
        findAllQuestions(param: $param, requiredCount: $requiredCount) {
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
        }
    }
`;

export const FIND_ALL_ALARMS = gql`
    query findAllAlarms($nickname: String!, $pageNum: Int, $requiredCount: Int) {
        findAllAlarms(nickname: $nickname, pageNum: $pageNum, requiredCount: $requiredCount) {
            _id
            question_id
            nickname
            respondent
            content
            date
            read
        }
    }
`;

export const COUNT_UNREAD_ALARMS = gql`
    query countUnreadAlarms($nickname: String!) {
        countUnreadAlarms(nickname: $nickname) {
            count
        }
    }
`;

export const FIND_QUESTIONS_BY_TAG = gql`
    query findQuestionsByTags(
        $param: String!
        $pageNum: Int!
        $requiredCount: Int!
        $tags: [String]!
        $logical: String!
    ) {
        findQuestionsByTags(
            param: $param
            pageNum: $pageNum
            requiredCount: $requiredCount
            tags: $tags
            logical: $logical
        ) {
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
                comments {
                    _id
                    author
                    content
                    date
                }
            }
        }
    }
`;

export const FIND_QUESTIONS_BY_OPTION = gql`
    query findQuestionsByOption(
        $param: String!
        $option: String!
        $searchContent: String!
        $pageNum: Int
        $requiredCount: Int
    ) {
        findQuestionsByOption(
            param: $param
            option: $option
            searchContent: $searchContent
            pageNum: $pageNum
            requiredCount: $requiredCount
        ) {
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

export const COUNT_TAGS = gql`
    query countTags($requiredCount: Int, $tags: [String]!) {
        countTags(requiredCount: $requiredCount, tags: $tags) {
            name
            count
        }
    }
`;
export const FIND_USER_BY_NICKNAME = gql`
    query findUserByNickname($nickname: String) {
        findUserByNickname(nickname: $nickname) {
            email
            nickname
            schoolName
            gitLink
            grade
            point
        }
    }
`;

export const FIND_HOME_KANBAN = gql`
    query findHomeKanban($requiredCount: Int) {
        findHomeKanban(requiredCount: $requiredCount) {
            date {
                _id
                title
                previews
                views
                answerCount
                likesCount
                author {
                    email
                    nickname
                    point
                    grade
                    gitLink
                    schoolName
                    attendance
                }
            }
            answerCount {
                _id
                title
                previews
                views
                answerCount
                likesCount
                author {
                    email
                    nickname
                    point
                    grade
                    gitLink
                    schoolName
                    attendance
                }
            }
            views {
                _id
                title
                previews
                views
                answerCount
                likesCount
                author {
                    email
                    nickname
                    point
                    grade
                    gitLink
                    schoolName
                    attendance
                }
            }
        }
    }
`;
