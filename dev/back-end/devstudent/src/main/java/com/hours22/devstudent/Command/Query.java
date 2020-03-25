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
    public List<Board> findAllQuestions(){
        System.out.println("=== FindAllQuestions ===");
        List<Board> boards = boardRepository.findAll();
        for(Board board : boards){
            System.out.println(board.toString());
        }
        return boards;
    }

    public Board findQuestionBy_id(String _id){
        if(boardRepository.countBy_id(_id) == 0){
            Board board = new Board("null","Exception","hours22",null,"null","Not Exist Board");
            return board;
        }
        System.out.println("=== findTopBy_id(_id = " + _id+") ===");
        Board board = boardRepository.findQuestionBy_id(_id);
        System.out.println(board.toString());
        int views = board.getViews();
        board.setViews(views + 1);
        boardRepository.save(board);
        return board;
    }
}