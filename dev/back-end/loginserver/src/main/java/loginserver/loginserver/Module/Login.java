package loginserver.loginserver.Module;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Login {
    @Autowired
    private RandMaker randMaker;
    @Autowired
    private UserRepository userRepository;

    public User login(String email, String password) {
        if (!userRepository.existsByEmail(email)) {
            return new User(null, "Login fail", "Login fail", "Login fail", "Login fail");
        }
        User user = userRepository.findByEmail(email);
        if (!user.getPassword().equals(password) || !user.getAuthState().equals("Certificated")) {
            return new User(null, "Login fail", "Login fail", "Login fail", "Login fail");
        }
        String key = randMaker.getKey(false, 20);
        user.setToken(key);
        userRepository.save(user);
        return user;
    }
}