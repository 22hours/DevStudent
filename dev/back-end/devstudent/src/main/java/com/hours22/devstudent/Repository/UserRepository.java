package com.hours22.devstudent.Repository;

import com.hours22.devstudent.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {

    User findByAuthState(String authState);

    Boolean existsByAuthState(String authState);

    Boolean existsByEmail(String email);

    boolean existsByNickName(String nickname);

    User findByNickName(String nickname);

    User findByEmail(String email);

    int countByNickName(String nickname);
}




