package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.SequenceID;
import com.hours22.devstudent.Repository.QuestionRepository;
import com.hours22.devstudent.Repository.SequenceIDRepository;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class Create {
    @Autowired
    private SequenceIDRepository sequenceIDRepository;

    public String makeSequence(String _id){
        SequenceID sequenceID = sequenceIDRepository.findBy_id(_id);
        int seqNum = sequenceID.getSeqNum() + 1;
        sequenceID.setSeqNum(seqNum);
        sequenceIDRepository.save(sequenceID);
        System.out.println(sequenceID.toString());
        return String.valueOf(seqNum);
    }
}
