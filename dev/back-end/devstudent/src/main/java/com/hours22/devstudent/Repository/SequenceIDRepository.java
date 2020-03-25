package com.hours22.devstudent.Repository;

import com.hours22.devstudent.Entity.SequenceID;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface SequenceIDRepository extends MongoRepository<SequenceID,String> {
    //SequenceID findTopBy_idAfterOrderBySeqNumDesc(String _id);
    SequenceID findBy_id(String _id);
    int countBy_id(String _id);
}
