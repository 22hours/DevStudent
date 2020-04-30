package com.hours22.devstudent.Command.Module;

import com.hours22.devstudent.Entity.UserInfo;
import com.hours22.devstudent.Repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class AddPoint {
    @Autowired
    private UserInfoRepository userInfoRepository;

    private final Map<String, Integer> points = new HashMap<String, Integer>() {
        {
            put("createQuestion", 2);
            put("createAnswer", 5);
            put("adoptAnswer", 3); // 채택 하기
            put("adoptedAnswer",5); // 채택 당하기
            put("like", 1);
            put("liked", 2);
            put("hate", -1);
            put("hated", -2);
        }
    };
    public UserInfo addPoint(String method,String nickname){
        int point = points.get(method);
        UserInfo userInfo = userInfoRepository.findByNickname(nickname);
        int nowPoint = userInfo.getPoint();
        nowPoint+=point;
        String grade = checkGrade(nowPoint);
        userInfo.setPoint(nowPoint);
        userInfo.setGrade(grade);
        userInfoRepository.save(userInfo);
        System.out.println(nickname + "님의 현재 포인트 : " + nowPoint);
        System.out.println(nickname + "님의 현재 단계 : " + grade);
        return userInfo;
    }

    private String checkGrade(int point){
        if(point<=10)
            return "bean";

        else if(point<=30)
            return "short";

        else if(point<=70)
            return "tall";

        else if(point<=150)
            return "grande";

        else if(point<=310)
            return "venti";

        return "trenta";
    }
}
