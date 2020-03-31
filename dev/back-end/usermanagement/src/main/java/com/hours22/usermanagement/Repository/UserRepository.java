package com.hours22.usermanagement.Repository;

import com.hours22.usermanagement.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User,String> {
    User findUserBy_id(String _id);
    User findUserByAuthState(String authState);
    boolean existsBy_id(String _id);
    int countBy_id(String _id);
}


