package loginserver.loginserver.Module.Create;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class CreateUser {

    @Autowired
    private UserRepository userRepository;

    public User createUser(String email, String password, String nickname, String schoolName) {
        // email 중복은 상관 없다 (key값이라 업데이트 된다)
        if(userRepository.existsByNickname(nickname)){ // dummy 데이터가 존재 한다면
            User dummyUser = userRepository.findByNickname(nickname);
            userRepository.delete(dummyUser);
        }
        User user = new User(email, password, nickname, schoolName);
        userRepository.save(user);
        user.setPassword(null);
        return user;
    }
}
