package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.hours22.devstudent.Entity.Board;
import com.hours22.devstudent.Repository.BoardRepository;

import java.util.List;


public class Query implements GraphQLQueryResolver {

    private BoardRepository boardRepository;

    public Query(BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }
    public List<Board> findAllBoards(){
        List<Board> boards = boardRepository.findAll();
        System.out.println("=== FindAllBoards ===");
        for(Board board : boards){
            System.out.println(board.toString());
        }
        return boards;
    }

    public Board findTopBy_id(String _id){
        Board board = boardRepository.findTopBy_id(_id);
        System.out.println("=== findTopBy_id(_id = " + _id+" ===");
        System.out.println(board.toString());
        return board;
    }
}