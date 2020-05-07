package loginserver.loginserver.Module.Update;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UpdateAttendance {
    @Autowired
    UserRepository userRepository;
    public User updateAttendance(String nickname){
        if(userRepository.countByNickname(nickname) == 0)
            return new User();
        User user = userRepository.findByNickname(nickname);
        if(user.isAttendance())
            return new User(null, "Already attend");
        user.setAttendance(true);
        //여기에 포인트 기능 추가.
        userRepository.save(user);

        return user;
    }
}
