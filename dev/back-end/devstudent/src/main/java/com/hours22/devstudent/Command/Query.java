package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.hours22.devstudent.Entity.Board;
import com.hours22.devstudent.Repository.BoardRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.ObjectOperators.ObjectToArray.toArray;


public class Query implements GraphQLQueryResolver {

    private BoardRepository boardRepository;

    public Query(BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }

    public List<Board> findAllQuestions(String param, int pageNum){
        List<Board> boards = boardRepository.findAll(Sort.by(Sort.Direction.DESC,param));
        for(Board board : boards){
            if(board.getPreviews()==null){
                String content = board.getContent();
                String previews = (content.length() < 20) ? content : content.substring(0, 20);
                board.setPreviews(previews);
                boardRepository.save(board);
            }
        }
        return boards;
    }

    public Board findQuestionBy_id(String _id){
        if(boardRepository.countBy_id(_id) == 0)
            return new Board("null","Exception","hours22",null,"null","Not Exist Board","Not Exist Board");

        Board board = boardRepository.findQuestionBy_id(_id);
        int views = board.getViews();
        board.setViews(views + 1);
        return boardRepository.save(board);
    }
}