package loginserver.loginserver.Module.Update;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UpdateUserAuthState {

    @Autowired
    private UserRepository userRepository;

    public User updateUserAuthState(String authState) {
        if (!userRepository.existsByAuthState(authState)) {
            return new User();
        }
        User user = userRepository.findByAuthState(authState);
        user.setAuthState("Certificated");
        userRepository.save(user);
        return user;
    }

}