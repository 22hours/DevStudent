package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Board;
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

    public Board createBoard(String title, String author, List<String> tags, String date, String content){
        SequenceID sequenceID = sequenceIDRepository.findBy_id("Board");
        int seqNum = sequenceID.getSeqNum() + 1;
        sequenceID.setSeqNum(seqNum);
        sequenceIDRepository.save(sequenceID);
        String previews = (content.length() < 20) ? content : content.substring(0, 20);
        return boardRepository.save(new Board(String.valueOf(seqNum),title,author,tags,date,content, previews));
    }

    public Answer createAnswer(String parentID, String author, String content, String date){
        if(boardRepository.countBy_id(parentID)==0)
            return new Answer("null","Exception","Not Exist Board","null");

        SequenceID sequenceID = sequenceIDRepository.findBy_id("Answer");
        int seqNum = sequenceID.getSeqNum() + 1;
        sequenceID.setSeqNum(seqNum);
        sequenceIDRepository.save(sequenceID);
        Answer answer = new Answer(String.valueOf(seqNum),author,content,date);
        Board board = boardRepository.findQuestionBy_id(parentID);
        List<Answer> answers = board.getAnswers();
        answers.add(answer);
        board.setAnswers(answers);
        board.setAnswerCount(board.getAnswerCount()+1);
        boardRepository.save(board);
        return answer;
    }
    public Board deleteBoard(String _id){
        if(boardRepository.countBy_id(_id) == 0)
            return new Board("null","Exception","hours22",null,"null","Not Exist Board","Not Exist Board");

        Board board = boardRepository.findQuestionBy_id(_id);
        boardRepository.delete(board);
        return board;
    }
}
