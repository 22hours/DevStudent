package loginserver.loginserver.Controller;

import loginserver.loginserver.Entity.Count;
import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Entity.UserInfo;
import loginserver.loginserver.Module.Create.CreateUser;
import loginserver.loginserver.Module.Find.FindUserByNickname;
import loginserver.loginserver.Module.Login;
import loginserver.loginserver.Module.Update.UpdateUserAuthState;
import loginserver.loginserver.Repository.UserInfoRepository;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.Map;

@RestController
@RequestMapping("/user/*")
@WebServlet(asyncSupported = true)
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserInfoRepository userInfoRepository;
    @Autowired
    private FindUserByNickname findUserByNickname;
    @Autowired
    private CreateUser createUser;
    @Autowired
    private UpdateUserAuthState updateUserAuthState;
    @Autowired
    private Login login;

    @RequestMapping(value="/{nickname}/data",method = RequestMethod.GET)
    public User findUserByNickname(@PathVariable("nickname") String nickname){
        return findUserByNickname.findUserByNickname(nickname);
    }
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public User createUser(@RequestBody User user) {
        String email = user.getEmail();
        String password = user.getPassword();
        String schoolName = user.getSchoolName();
        return createUser.createUser(email, password, schoolName);
    }
    @RequestMapping(value = "/update/AuthState", method = RequestMethod.POST)
    public User updateUserAuthState(@RequestBody User user) {
        String authState = user.getAuthState();
        return updateUserAuthState.updateUserAuthState(authState);
    }
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public User loginToServer(@RequestBody Map<String, String> map) {
        String email = map.get("email");
        String password = map.get("password");
        String ip = map.get("ip");
        return login.login(email, password, ip);
    }
    @RequestMapping(value = "/create/nickname",method = RequestMethod.POST)
    public User createNickname(@RequestBody User user) {// 중복은 0, 중복이 아닌 것은 1
        String email = user.getEmail();
        String nickname = user.getNickname();
        if (!userRepository.existsByNickname(nickname))
        {
            User tempUser = userRepository.findByEmail(email);
            tempUser.setNickname(nickname);
            userRepository.save(tempUser);
            UserInfo userInfo = new UserInfo(email,nickname,tempUser.getSchoolName());
            userInfoRepository.save(userInfo);
            return tempUser;
        }
        return new User();
    }
    @RequestMapping(value = "/check/email",method = RequestMethod.POST)
    public Count checkDuplicateEmail(@RequestBody User user){
        String email = user.getEmail();
        if(!userRepository.existsByEmail(email)){
            return new Count("true");
        }
        return new Count("duplicated");
    }
}
