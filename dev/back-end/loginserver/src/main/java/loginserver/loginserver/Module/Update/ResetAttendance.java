package loginserver.loginserver.Module.Update;


import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ResetAttendance {

    @Autowired
    MongoTemplate mongoTemplate;
    @Autowired
    UserRepository userRepository;

    public void resetAttendance(){
        Criteria criteria = new Criteria("nickname");
        criteria.ne(null);
        Query query = new Query(criteria);
        List<User> users = this.mongoTemplate.find(query, User.class);
        for(User user : users){
            user.setAttendance(false);
        }
        userRepository.saveAll(users);
    }
}
