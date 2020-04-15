package loginserver.loginserver.Repository;

import loginserver.loginserver.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    User findByAuthState(String authState);

    Boolean existsByAuthState(String authState);

    Boolean existsByEmail(String email);

    Boolean existsByNickname(String nickname);

    User findByNickname(String nickname);

    User findByEmail(String email);

    int countByNickname(String nickname);
}




