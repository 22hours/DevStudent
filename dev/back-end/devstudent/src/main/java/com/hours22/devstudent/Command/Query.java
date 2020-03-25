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
        System.out.println("=== FindAllBoards ===");
        List<Board> boards = boardRepository.findAll();
        for(Board board : boards){
            System.out.println(board.toString());
        }
        return boards;
    }

    public Board findBy_id(String _id){
        System.out.println("=== findTopBy_id(_id = " + _id+" ===");
        Board board = boardRepository.findBy_id(_id);
        System.out.println(board.toString());
        return board;
    }
}