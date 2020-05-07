package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Entity.*;
import com.hours22.devstudent.Repository.AlarmRepository;
import com.hours22.devstudent.Repository.SequenceIDRepository;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class Create {
    @Autowired
    private SequenceIDRepository sequenceIDRepository;
    @Autowired
    private AlarmRepository alarmRepository;

    public String makeSequence(String _id) {
        if (sequenceIDRepository.countBy_id(_id) == 0) {
            System.out.println(_id + "이 Sequence에 없습니다!");
            SequenceID sequenceID = new SequenceID(_id, 0);
            sequenceIDRepository.save(sequenceID);
            System.out.println(_id + "을 Sequence에 생성 완료!");
        }
        SequenceID sequenceID = sequenceIDRepository.findBy_id(_id);
        int seqNum = sequenceID.getSeqNum() + 1;
        sequenceID.setSeqNum(seqNum);
        sequenceIDRepository.save(sequenceID);
        return String.valueOf(seqNum);
    }

    public void createAlarm(String question_id, String nickname, String respondent, String content) {
        if (nickname.equals(respondent)) return; //자신이 알람을 일으키진 않는다

        if (sequenceIDRepository.countBy_id("Alarm") == 0) {
            System.out.println("Alarm" + "이 Sequence에 없습니다!");
            SequenceID sequenceID = new SequenceID("Alarm", 0);
            sequenceIDRepository.save(sequenceID);
            System.out.println("Alarm" + "을 Sequence에 생성 완료!");
        }
        SequenceID sequenceID = sequenceIDRepository.findBy_id("Alarm");
        int seqNum = sequenceID.getSeqNum() + 1;
        sequenceID.setSeqNum(seqNum);
        sequenceIDRepository.save(sequenceID);
        Alarm alarm = new Alarm(String.valueOf(seqNum), question_id, nickname, respondent, content);
        alarmRepository.save(alarm);
    }
}
