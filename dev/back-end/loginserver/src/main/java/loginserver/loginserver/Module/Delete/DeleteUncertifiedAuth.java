package loginserver.loginserver.Module.Delete;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Component
public class DeleteUncertifiedAuth {
    @Autowired
    MongoTemplate mongoTemplate;
    @Autowired
    UserRepository userRepository;
    public void deleteUncertifiedAuth(){
        Criteria criteria = new Criteria("authState");
        criteria.ne("Certificated");
        Query query = new Query(criteria);

        List<User> users = this.mongoTemplate.find(query, User.class);
        List<User> deleteUser = new ArrayList<User>();
        String createdUserDate;
        String currentDate;

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy년MM월dd일 HH시mm분ss초");
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, -1);
        Date date = cal.getTime();
        currentDate = simpleDateFormat.format(date);

        for(User user : users){
            createdUserDate = user.getDate();
            if(createdUserDate.compareTo(currentDate) < 0){
                deleteUser.add(user);
            }
        }
        userRepository.deleteAll(deleteUser);
    }
}
