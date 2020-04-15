package loginserver.loginserver.Command;


import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Module.Find.FindUserByNickname;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Query implements GraphQLQueryResolver {
    @Autowired
    private FindUserByNickname findUserByNickname;

    public User findUserByNickname(String token, String nickname){
        return findUserByNickname.findUserByNickname(token,nickname);
    }
}
