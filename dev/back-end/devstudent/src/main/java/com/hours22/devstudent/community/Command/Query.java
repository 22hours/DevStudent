package com.hours22.devstudent.community.Command;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.hours22.devstudent.community.Entity.Board;
import com.hours22.devstudent.community.Repository.BoardRepository;
import com.hours22.devstudent.community.Repository.SequenceIDRepository;

import java.util.List;

public class Query implements GraphQLQueryResolver {
    private BoardRepository boardRepository;

    public Query(BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }

    public Board findBoardBy_id(int _id){
        Board board = boardRepository.findBoardBy_id(_id);
        System.out.println("=== FindBoardBy_id(_id = " + _id+" ===");
        System.out.println(board.toString());
        return board;
    }
    public List<Board> findAllBoards(){
        List<Board> boards = boardRepository.findAll();
        System.out.println("=== FindAllBoards ===");
        for(Board board : boards){
            System.out.println(board.toString());
        }
        return boards;
    }
}
