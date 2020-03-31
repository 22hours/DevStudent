package com.hours22.usermanagement.Command;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.hours22.usermanagement.Command.Find.FindUserBy_id;
import com.hours22.usermanagement.Command.Update.UpdateUserAuthState;
import com.hours22.usermanagement.Entity.User;
import com.hours22.usermanagement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;

@Component
public class Query implements GraphQLQueryResolver {

    private UserRepository userRepository;

    @Autowired
    FindUserBy_id findUserBy_id;

    @Autowired
    UpdateUserAuthState updateUserAuthState;

    public Query(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUserBy_id(String _id) {
        return findUserBy_id.findUserBy_id(_id);
    }

}