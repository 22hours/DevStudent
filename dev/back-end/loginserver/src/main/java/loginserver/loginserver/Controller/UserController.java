package loginserver.loginserver.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import loginserver.loginserver.Entity.Count;
import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Entity.UserInfo;
import loginserver.loginserver.Module.Create.CreateNewAccessToken;
import loginserver.loginserver.Module.Create.CreateUser;
import loginserver.loginserver.Module.Login;
import loginserver.loginserver.Module.Update.UpdateUserAuthState;
import loginserver.loginserver.Repository.UserInfoRepository;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/user/*")
@WebServlet(asyncSupported = true)
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserInfoRepository userInfoRepository;
    @Autowired
    private CreateUser createUser;
    @Autowired
    private UpdateUserAuthState updateUserAuthState;
    @Autowired
    private Login login;
    @Autowired
    private CreateNewAccessToken createNewAccessToken;


    @Async(value = "cuser")
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public CompletableFuture<String> createUser(@RequestBody User user) {
        String email = user.getEmail();
        String password = user.getPassword();
        String schoolName = user.getSchoolName();
        User tempUser = createUser.createUser(email, password, schoolName);
        Gson gson = new Gson();
        String json = gson.toJson(tempUser);
        System.out.println("Request = " + user.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "UAuthState")
    @RequestMapping(value = "/update/AuthState", method = RequestMethod.POST)
    public CompletableFuture<String> updateUserAuthState(@RequestBody User user) {
        String authState = user.getAuthState();
        User tempUser = updateUserAuthState.updateUserAuthState(authState);
        Gson gson = new Gson();
        String json = gson.toJson(tempUser);
        System.out.println("Request = " + user.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "logindevstu")
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public CompletableFuture<String> loginToServer(@RequestBody Map<String, String> map) {
        String email = map.get("email");
        String password = map.get("password");
        String ip = map.get("ip");
        User tempUser = login.login(email, password, ip);
        Gson gson = new Gson();
        String json = gson.toJson(tempUser);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }
    @Async(value = "nickname")
    @RequestMapping(value = "/create/nickname",method = RequestMethod.POST)
    //public User createNickname(@RequestBody User user) {// 중복은 0, 중복이 아닌 것은 1
    public CompletableFuture<String> createNickname(@RequestBody Map<String, String> map) {// 중복은 0, 중복이 아닌 것은 1
        String email = map.get("email");//user.getEmail();
        String nickname = map.get("nickname");//user.getNickname();
        String ip = map.get("ip");
        if (!userRepository.existsByNickname(nickname))
        {
            User tempUser = userRepository.findByEmail(email);
            if(!(tempUser.getAuthState().equals("Certificated")))
                return null;
            tempUser.setAccessToken(createNewAccessToken.create(nickname, email, ip));
            tempUser.setNickname(nickname);
            userRepository.save(tempUser);
            UserInfo userInfo = new UserInfo(email,nickname,tempUser.getSchoolName());
            userInfoRepository.save(userInfo);
            Gson gson = new Gson();
            String json = gson.toJson(tempUser);
            return CompletableFuture.completedFuture(json);
        }
        return null;
    }
    @Async(value = "duplicateEmail")
    @RequestMapping(value = "/check/email",method = RequestMethod.POST)
    public CompletableFuture<String> checkDuplicateEmail(@RequestBody User user){
        String email = user.getEmail();
        if(!userRepository.existsByEmail(email)){
            return CompletableFuture.completedFuture("true");
        }
        return CompletableFuture.completedFuture("duplicated");
    }
}
