package com.hours22.devstudent.community.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.hours22.devstudent.community.Entity.Board;
import com.hours22.devstudent.community.Entity.SequenceID;
import com.hours22.devstudent.community.Repository.BoardRepository;
import com.hours22.devstudent.community.Repository.SequenceIDRepository;

import java.util.Date;
import java.util.List;

public class Mutation implements GraphQLMutationResolver{
    private BoardRepository boardRepository;
    private SequenceIDRepository sequenceIDRepository;

    public Mutation(BoardRepository boardRepository, SequenceIDRepository sequenceIDRepository) {
        this.boardRepository = boardRepository;
        this.sequenceIDRepository = sequenceIDRepository;
    }

    public Board deleteBoard(int _id){
        System.out.println("=== Delete Board ===");
        Board board = boardRepository.findBoardBy_id(_id);
        boardRepository.delete(board);
        System.out.println(board.toString());
        return board;
    }

    public Board createBoard(String title, String author, List<String> tags, String date, String content){
        if(sequenceIDRepository.findTopBy_id("Board").equals(null)){
            SequenceID sequenceID = new SequenceID("Board",0);
            sequenceIDRepository.save(sequenceID);
        }
        System.out.println("=== CreateBoard ===");
        SequenceID sequenceID = sequenceIDRepository.findTopBy_idAfterOrderBySeqNumDesc("Board");
        int seqNum = sequenceID.getSeqNum();
        Board board = new Board(seqNum,title,author,tags,date,content);
        boardRepository.save(board);
        System.out.println(board.toString());
        return board;
    }
}
