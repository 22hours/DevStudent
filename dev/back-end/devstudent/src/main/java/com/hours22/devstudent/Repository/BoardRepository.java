package com.hours22.devstudent.Repository;

import com.hours22.devstudent.Entity.Board;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;


public interface BoardRepository extends MongoRepository<Board,String> {
    Board findQuestionBy_id(String _id);
    int countBy_id(String _id);

}