package com.hours22.devstudent.Repository;

import com.hours22.devstudent.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {

    User findByAuthState(String authState);

    Boolean existsByAuthState(String authState);

    boolean existsBy_id(String _id);

    User findBy_id(String _id);
}




