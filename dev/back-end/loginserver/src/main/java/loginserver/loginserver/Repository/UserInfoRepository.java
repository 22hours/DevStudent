package loginserver.loginserver.Repository;

import loginserver.loginserver.Entity.UserInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserInfoRepository extends MongoRepository<UserInfo,String> {

    UserInfo findByNickname(String nickname);

    UserInfo findByEmail(String email);
}
