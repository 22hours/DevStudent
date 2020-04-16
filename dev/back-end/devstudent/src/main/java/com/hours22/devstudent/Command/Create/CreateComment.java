package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Entity.Alarm;
import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Comment;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CreateComment extends Create {
    @Autowired
    private QuestionRepository questionRepository;

    public Comment createComment(String question_id, String answer_id, String author, String content) {
        if (questionRepository.countBy_id(question_id) == 0)
            return new Comment("null", "Exception", "Not Exist Question");
        Question question = questionRepository.findQuestionBy_id(question_id);
        if (answer_id.equals("Question")) { // Question에 다는 Comment
            String myID = makeSequence("Comment");
            Comment comment = new Comment(myID, author, content);
            List<Comment> comments = question.getComments();
            comments.add(comment);
            question.setComments(comments);
            questionRepository.save(question);
            // 알람 생성 기능
            String questionAuthor = question.getAuthor(); // 게시물 작성자 알아오기
            createAlarm(question_id, questionAuthor, author, "님이 답변을 달았습니다.");
            return comment;
        }
        List<Answer> answers = question.getAnswers();
        for (Answer answer : answers) {
            if (answer.get_id().equals(answer_id)) { // 게시물도 있고, 해당 답변도 있다면
                String myID = makeSequence("Comment");
                Comment comment = new Comment(myID, author, content);
                List<Comment> comments = answer.getComments();
                comments.add(comment);
                answer.setComments(comments);
                question.setAnswers(answers);
                questionRepository.save(question);
                // 알람 생성 기능
                String answerAuthor = answer.getAuthor();
                createAlarm(question_id, answerAuthor, author, "님이 댓글을 달았습니다.");
                return comment;
            }
        }
        //for문을 빠져나왔다는 것은 해당 답변이 없다는 뜻
        return new Comment("null", "Exception", "Not Exist Answer");
    }
}
