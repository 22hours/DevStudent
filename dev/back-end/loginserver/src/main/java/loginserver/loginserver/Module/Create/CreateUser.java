package loginserver.loginserver.Module.Create;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Module.AuthMailSend;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class CreateUser {
    @Autowired
    private AuthMailSend authMailSend;
    @Autowired
    private UserRepository userRepository;

    public User createUser(String email, String password, String schoolName) {
        String genKey = authMailSend.authMailSend(email);
        User user = new User(email, password, schoolName);
        user.setAuthState(genKey);
        userRepository.insert(user);
        user.setPassword(null);
        user.setAuthState(null);
        return user;
    }
}
