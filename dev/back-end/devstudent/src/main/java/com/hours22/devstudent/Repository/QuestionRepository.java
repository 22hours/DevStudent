package com.hours22.devstudent.Repository;

import com.hours22.devstudent.Entity.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question, String> {
    Question findQuestionBy_id(String _id);

    int countBy_id(String _id);
}