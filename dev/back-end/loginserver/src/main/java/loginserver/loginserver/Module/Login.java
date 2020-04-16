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
    @Autowired
    private CreateNewRefreshToken createNewRefreshToken;


    public User login(String email, String password) {
        if (!userRepository.existsByEmail(email)) {
            return new User(null, "Login fail", "Login fail", "Login fail", "Login fail");
        }
        User user = userRepository.findByEmail(email);
        if (!user.getPassword().equals(password) || !user.getAuthState().equals("Certificated")) {
            return new User(null, "Login fail", "Login fail", "Login fail", "Login fail");
        }
        //String key = randMaker.getKey(false, 20);
        user.setRefreshToken(createNewRefreshToken.create(user.getNickname(), email));
        userRepository.save(user);
        user.setPassword(null);
        user.setAccessToken(createNewAccessToken.create(user.getNickname(), email));
        return user;
    }
}