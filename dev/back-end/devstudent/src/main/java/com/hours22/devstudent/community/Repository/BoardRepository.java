package com.hours22.devstudent.community.Repository;

import com.hours22.devstudent.community.Entity.Board;
import com.hours22.devstudent.community.Entity.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BoardRepository extends MongoRepository<Board,String> {
    Board findBoardBy_id(int _id);
}
