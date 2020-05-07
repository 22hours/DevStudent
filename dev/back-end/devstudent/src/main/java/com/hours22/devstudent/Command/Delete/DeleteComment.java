package com.hours22.devstudent.Command.Delete;

import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Comment;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DeleteComment extends Delete {
    @Autowired
    private QuestionRepository questionRepository;

    public Comment deleteComment(String question_id, String answer_id, String comment_id) {
        if (questionRepository.countBy_id(question_id) == 0)
            return new Comment("null", "Exception", "Not Exist Question");
        Question Question = questionRepository.findQuestionBy_id(question_id);
        if (answer_id.equals("Question")) { // Question에 있는 Comment
            List<Comment> comments = Question.getComments();
            for (Comment comment : comments) {
                if (comment.get_id().equals(comment_id)) { // 게시물도 있고, 해당 답변도 있다면
                    comments.remove(comment);
                    Question.setComments(comments);
                    questionRepository.save(Question);
                    return comment;
                }
            }
            return new Comment("null", "Exception", "Not Exist Question"); // for문을 빠져나왔다는 거는 해당 질문 없다는 뜻
        }
        List<Answer> answers = Question.getAnswers();
        for (Answer answer : answers) {
            if (answer.get_id().equals(answer_id)) { // 게시물도 있고, 해당 답변도 있다면
                List<Comment> comments = answer.getComments();
                for (Comment comment : comments) {
                    if (comment.get_id().equals(comment_id)) { // 그 답변에 댓글이 있다면
                        comments.remove(comment);
                        answer.setComments(comments);
                        Question.setAnswers(answers);
                        questionRepository.save(Question);
                        return comment;
                    }
                }
                return new Comment("null", "Exception", "Not Exist Comment"); // for문을 빠져나왔다는 거는 해당 댓글이 없다는 뜻
            }
        }
        return new Comment("null", "Exception", "Not Exist Answer"); // for문을 빠져나왔다는 거는 해당 답변이 없다는 뜻
    }
}
