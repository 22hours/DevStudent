package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Entity.*;
import com.hours22.devstudent.Repository.AlarmRepository;
import com.hours22.devstudent.Repository.SequenceIDRepository;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class Create {
    @Autowired
    private SequenceIDRepository sequenceIDRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AlarmRepository alarmRepository;

    public String makeSequence(String _id){
        SequenceID sequenceID = sequenceIDRepository.findBy_id(_id);
        int seqNum = sequenceID.getSeqNum() + 1;
        sequenceID.setSeqNum(seqNum);
        sequenceIDRepository.save(sequenceID);
        return String.valueOf(seqNum);
    }
    public boolean isAuthorized(String author,String token){
        if(userRepository.countByNickName(author) == 0) return false;
        User user = userRepository.findByNickName(author);
        System.out.println(user.toString());
        if(!user.getToken().equals(token)) return false;
        return true;
    }
    public void createAlarm(String question_id, String userNickname, String respondent, String content){
        if(userNickname.equals(respondent)) return; //자신이 알람을 일으키진 않는다

        if(sequenceIDRepository.countBy_id("Alarm") == 0) {
            System.out.println("Alarm" + "이 Sequence에 없습니다!");
            SequenceID sequenceID = new SequenceID("Alarm", 0);
            sequenceIDRepository.save(sequenceID);
            System.out.println("Alarm" + "을 Sequence에 생성 완료!");
        }
        SequenceID sequenceID = sequenceIDRepository.findBy_id("Alarm");
        int seqNum = sequenceID.getSeqNum() + 1;
        sequenceID.setSeqNum(seqNum);
        sequenceIDRepository.save(sequenceID);
        Alarm alarm = new Alarm(String.valueOf(seqNum),question_id,userNickname,respondent,content);
        alarmRepository.save(alarm);
    }
}
