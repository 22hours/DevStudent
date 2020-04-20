package loginserver.loginserver.Module.Update;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UpdateUserInfo {
    @Autowired
    private UserRepository userRepository;
    public User updateUserInfo(String nickname, String gitLink){
        User user = userRepository.findByNickname(nickname);
        user.setGitLink(gitLink);
        return userRepository.save(user);
    }
}
