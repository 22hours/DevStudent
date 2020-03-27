package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Board;
import com.hours22.devstudent.Entity.Comment;
import com.hours22.devstudent.Entity.SequenceID;
import com.hours22.devstudent.Repository.BoardRepository;
import com.hours22.devstudent.Repository.SequenceIDRepository;

import java.util.List;

public class Mutation implements GraphQLMutationResolver {
    private BoardRepository boardRepository;
    private SequenceIDRepository sequenceIDRepository;

    public Mutation(BoardRepository boardRepository, SequenceIDRepository sequenceIDRepository) {
        this.boardRepository = boardRepository;
        this.sequenceIDRepository = sequenceIDRepository;
    }

    public Board createQuestion(String title, String author, List<String> tags, String date, String content){
        String seqNum = makeSequence("Board");
        String previews = (content.length() < 20) ? content : content.substring(0, 20);
        return boardRepository.save(new Board(seqNum,title,author,tags,date,content, previews));
    }

    public Answer createAnswer(String question_id, String author, String content, String date){
        if(boardRepository.countBy_id(question_id)==0)
            return new Answer("null","Exception","Not Exist Board","null");
        String seqNum = makeSequence("Answer");
        Answer answer = new Answer(seqNum,author,content,date);
        Board board = boardRepository.findQuestionBy_id(question_id);
        List<Answer> answers = board.getAnswers();
        answers.add(answer);
        board.setAnswers(answers);
        board.setAnswerCount(board.getAnswerCount()+1);
        boardRepository.save(board);
        return answer;
    }
    public Comment createComment(String question_id,String answer_id,String author,String content, String date){
        if(boardRepository.countBy_id(question_id)==0)
            return new Comment("null","Exception","Not Exist Board","null");
        Board board = boardRepository.findQuestionBy_id(question_id);
        if(answer_id.equals("")){ // Question에 다는 Comment
            String myID = makeSequence("Comment");
            Comment comment = new Comment(myID,author,content,date);
            List<Comment> comments = board.getComments();
            comments.add(comment);
            board.setComments(comments);
            boardRepository.save(board);
            return comment;
        }
        List<Answer> answers = board.getAnswers();
        for(Answer answer : answers){
            if(answer.get_id().equals(answer_id)){ // 게시물도 있고, 해당 답변도 있다면
                String myID = makeSequence("Comment");
                Comment comment = new Comment(myID,author,content,date);
                List<Comment> comments = answer.getComments();
                comments.add(comment);
                answer.setComments(comments);
                board.setAnswers(answers);
                boardRepository.save(board);
                return comment;
            }
        }
        //for문을 빠져나왔다는 것은 해당 답변이 없다는 뜻
        return new Comment("null","Exception","Not Exist Answer","null");
    }
    public Board deleteQuestion(String _id){
        if(boardRepository.countBy_id(_id) == 0)
            return new Board("null","Exception","hours22",null,"null","Not Exist Board","Not Exist Board");
        Board board = boardRepository.findQuestionBy_id(_id);
        boardRepository.delete(board);
        return board;
    }
    public String makeSequence(String _id){
        SequenceID sequenceID = sequenceIDRepository.findBy_id(_id);
        int seqNum = sequenceID.getSeqNum() + 1;
        sequenceID.setSeqNum(seqNum);
        sequenceIDRepository.save(sequenceID);
        return String.valueOf(seqNum);
    }
}
