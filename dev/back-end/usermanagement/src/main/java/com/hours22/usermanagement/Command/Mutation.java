package com.hours22.usermanagement.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.hours22.usermanagement.Command.Create.CreateUser;
import com.hours22.usermanagement.Command.Update.UpdateUserAuthState;
import com.hours22.usermanagement.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Mutation implements GraphQLMutationResolver {
    @Autowired
    private CreateUser createUser;
    @Autowired
    private UpdateUserAuthState updateUserAuthState;


    public User createUser(String _id, String password, String nickName, String email, String schoolName, String date) {
        return createUser.createUser(_id, password, nickName, email, schoolName, date);
    }

    public User updateUserAuthState(String authState){
        return updateUserAuthState.updateUserAuthState(authState);
    }
}
