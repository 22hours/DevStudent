package com.hours22.devstudent.community.Repository;

import com.hours22.devstudent.community.Entity.SequenceID;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SequenceIDRepository extends MongoRepository<SequenceID,String> {
    SequenceID findTopBy_idAfterOrderBySeqNumDesc(String _id);
    SequenceID findTopBy_id(String _id);
}
