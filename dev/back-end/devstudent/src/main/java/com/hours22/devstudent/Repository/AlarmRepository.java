package com.hours22.devstudent.Repository;

import com.hours22.devstudent.Entity.Alarm;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AlarmRepository extends MongoRepository<Alarm,String> {
}
