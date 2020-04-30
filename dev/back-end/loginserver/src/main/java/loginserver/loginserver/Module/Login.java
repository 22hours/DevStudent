package loginserver.loginserver.Module;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Module.Create.CreateNewAccessToken;
import loginserver.loginserver.Module.Create.CreateNewRefreshToken;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Login {
    @Autowired
    private RandMaker randMaker;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CreateNewAccessToken createNewAccessToken;


    public User login(String email, String password, String ip) {
        if (!userRepository.existsByEmail(email)) {
            return new User();
        }
        User user = userRepository.findByEmail(email);
        if (!user.getPassword().equals(password)) {
            return new User();
        }
        user.setPassword(null);
        user.setAccessToken(createNewAccessToken.create(user.getNickname(), email, ip));
        return user;
    }
}