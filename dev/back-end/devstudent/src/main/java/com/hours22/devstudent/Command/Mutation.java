package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
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
        System.out.println("=== CreateBoard ===");
        if(sequenceIDRepository.countBy_id("Board") == 0) {
            System.out.println("Board는 없습니다.");
            SequenceID sequenceID = new SequenceID("Board", 0);
            sequenceIDRepository.save(sequenceID);
        }
        //SequenceID sequenceID = sequenceIDRepository.findTopBy_idAfterOrderBySeqNumDesc("Board");
        SequenceID sequenceID = sequenceIDRepository.findTopBy_id("Board");
        int seqNum = sequenceID.getSeqNum() + 1;
        sequenceID.setSeqNum(seqNum);
        System.out.println("SequenceID = " + sequenceID.toString());
        sequenceIDRepository.save(sequenceID);
        Board board = new Board(String.valueOf(seqNum),title,author,tags,date,content);
        boardRepository.save(board);
        System.out.println(board.toString());
        return board;
    }

    public Board deleteBoard(String _id){
        System.out.println("=== Delete Board ===");
        Board board = boardRepository.findBy_id(_id);
        boardRepository.delete(board);
        System.out.println(board.toString());
        return board;
    }
}
