package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.hours22.devstudent.Entity.Board;
import com.hours22.devstudent.Repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;

import java.lang.reflect.Array;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.ObjectOperators.ObjectToArray.toArray;


public class Query implements GraphQLQueryResolver {

    private BoardRepository boardRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Query(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    public List<Board> findAllQuestions(String param, int pageNum, int requiredCount) {
        System.out.println("findAllQuestions 시작");
        org.springframework.data.mongodb.core.query.Query query = new org.springframework.data.mongodb.core.query.Query();
        query.with(Sort.by(Sort.Direction.DESC, param));
        query.limit(requiredCount);
        query.skip((pageNum - 1) * requiredCount);
        List<Board> boards = this.mongoTemplate.find(query, Board.class);


        return boards;
    }

    public Board findQuestionBy_id(String _id) {
        if (boardRepository.countBy_id(_id) == 0)
            return new Board("null", "Exception", "hours22", null, "null", "Not Exist Board", "Not Exist Board");

        Board board = boardRepository.findQuestionBy_id(_id);
        int views = board.getViews();
        board.setViews(views + 1);
        return boardRepository.save(board);
    }

    public List<Board> findTagsQuestions(String param, int pageNum, int requiredCount, List<String> tags, String logical) {
        System.out.println("findAllQuestions with tags 시작");
        Criteria criteria = new Criteria("tags");
        if (logical.equals("and"))
            criteria.all(tags);
        else if (logical.equals("or"))
            criteria.in(tags);
        else {
            return new ArrayList<Board>();
        }
        org.springframework.data.mongodb.core.query.Query query = new org.springframework.data.mongodb.core.query.Query(criteria);
        query.with(Sort.by(Sort.Direction.DESC, param));
        query.limit(requiredCount);
        query.skip((pageNum - 1) * requiredCount);
        List<Board> boards = this.mongoTemplate.find(query, Board.class);
        System.out.println(boards.toString());
        return boards;


//        List<Board> boards = boardRepository.findByTags(tags);
//
//        System.out.println(boards.toString());
//        return boards;

//        List<AggregationOperation> aggregate_command = new ArrayList<AggregationOperation>();
//        MatchOperation matchOperation;
//        Criteria criteria;
//        for(int round = 0; round < tag_size; round++){
//            criteria = new Criteria().where("tags").is(tags.get(round));
//            matchOperation = Aggregation.match(criteria);
//            aggregate_command.add(matchOperation);
//        }
//        aggregate_command.add(new SkipOperation((Integer.parseInt(index) - 1)*10));
//        aggregate_command.add(new LimitOperation(10));
//        ProjectionOperation projectionOperation = Aggregation.project
//                ("_id", "title", "author","tags","date","content",
//                        "previews","answerCount","views","solved","comments","answers");
//        aggregate_command.add(projectionOperation);
//        AggregationResults<Board> aggregate =
//                this.mongoTemplate.aggregate(Aggregation.newAggregation(aggregate_command),
//                        Board.class,
//                        Board.class);
//        System.out.println(aggregate.getMappedResults().toString());
//        return aggregate.getMappedResults();

    }

}