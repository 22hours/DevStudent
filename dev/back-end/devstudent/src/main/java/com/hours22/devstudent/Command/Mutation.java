package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.hours22.devstudent.Command.Create.CreateAnswer;
import com.hours22.devstudent.Command.Create.CreateComment;
import com.hours22.devstudent.Command.Create.CreateQuestion;
import com.hours22.devstudent.Command.Delete.DeleteQuestion;
import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.Comment;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Mutation implements GraphQLMutationResolver {
    @Autowired
    private CreateAnswer createAnswer;
    @Autowired
    private CreateQuestion createQuestion;
    @Autowired
    private CreateComment createComment;
    @Autowired
    private DeleteQuestion deleteQuestion;

    public Question createQuestion(String title, String author, List<String> tags, String content){
        return createQuestion.createQuestion(title,author,tags,content);
    }

    public Answer createAnswer(String question_id, String author, String content){
        return createAnswer.createAnswer(question_id,author,content);
    }

    public Comment createComment(String question_id,String answer_id,String author,String content){
        return createComment.createComment(question_id,answer_id,author,content);
    }

    public Question deleteQuestion(String _id){
        return deleteQuestion.deleteQuestion(_id);
    }

}
