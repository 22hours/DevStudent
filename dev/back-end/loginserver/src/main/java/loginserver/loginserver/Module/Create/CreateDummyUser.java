package loginserver.loginserver.Module.Create;

import loginserver.loginserver.Configuration.BeanUtils;
import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Module.RandMaker;
import loginserver.loginserver.Repository.UserRepository;

public class CreateDummyUser implements Runnable{

    private UserRepository userRepository;
    private RandMaker randMaker;
    private String email = null;
    private String nickname = null;
    public CreateDummyUser(String email, String nickname){
        userRepository = (UserRepository)BeanUtils.getBean(UserRepository.class);
        randMaker = (RandMaker)BeanUtils.getBean(RandMaker.class);
        this.nickname = nickname;
        this.email = email;
    }
    @Override
    public void run(){
        try{
            String key = randMaker.getKey(false, 20);
            if(email == null)
                email = key;

            User user = new User(email,nickname);
            userRepository.save(user);
            Thread.sleep(300000); // 5분
            if(email.equals(key)) { // dummy Data로 닉네임만 있을 경우
                if (userRepository.existsByNickname(nickname)) { // dummy 데이터가 존재 한다면 -> createUser에서 지워주기 때문에 검사
                    User dummyUser = userRepository.findByNickname(nickname);
                    if (dummyUser.getEmail().equals(key)) { // dummy 데이터라면 삭제
                        userRepository.delete(dummyUser);
                    }
                }
            }
            else{ // email은 있고, nickname이 null인 경우
                User dummyUser = userRepository.findByEmail(email);
                if(dummyUser.getPassword().equals(null)){
                    userRepository.delete(dummyUser);
                }
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
}
