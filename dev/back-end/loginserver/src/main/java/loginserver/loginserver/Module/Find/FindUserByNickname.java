package loginserver.loginserver.Module.Find;


import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FindUserByNickname {
    @Autowired
    private UserRepository userRepository;

    public User findUserByNickname(String nickname) {
        if (userRepository.countByNickname(nickname) == 0)
            return new User(null, "fail", "not exist user", "fail", "fail");
        User user = userRepository.findByNickname(nickname);
        user.setRefreshToken(null);
        user.setAccessToken(null);
        return user;
    }
}
