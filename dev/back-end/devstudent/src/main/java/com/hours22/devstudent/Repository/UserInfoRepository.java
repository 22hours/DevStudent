package com.hours22.devstudent.Repository;

import com.hours22.devstudent.Entity.UserInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserInfoRepository extends MongoRepository<UserInfo, String> {
    UserInfo findByNickname(String nickname);
}