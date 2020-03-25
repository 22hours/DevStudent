package com.hours22.devstudent.Repository;

import com.hours22.devstudent.Entity.Board;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface BoardRepository extends MongoRepository<Board,String> {
    Board findTopBy_id(String _id);
}
