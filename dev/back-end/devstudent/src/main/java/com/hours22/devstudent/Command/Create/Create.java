package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.SequenceID;
import com.hours22.devstudent.Entity.User;
import com.hours22.devstudent.Repository.SequenceIDRepository;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class Create {
    @Autowired
    private SequenceIDRepository sequenceIDRepository;
    @Autowired
    private UserRepository userRepository;

    public String makeSequence(String _id){
        SequenceID sequenceID = sequenceIDRepository.findBy_id(_id);
        int seqNum = sequenceID.getSeqNum() + 1;
        sequenceID.setSeqNum(seqNum);
        sequenceIDRepository.save(sequenceID);
        return String.valueOf(seqNum);
    }
    public boolean isAuthorized(String author,String token){
        if(userRepository.countBy_id(author) == 0) return false;
        User user = userRepository.findBy_id(author);
        if(!user.getToken().equals(token)) return false;
        return true;
    }
}
