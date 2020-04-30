package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Command.Find.FindUserInfo;
import com.hours22.devstudent.Command.Module.AddPoint;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.UserInfo;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class CreateQuestion extends Create {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private FindUserInfo findUserInfo;
    @Autowired
    private AddPoint addPoint;


    public Question createQuestion(String title, String author, List<String> tags, String content) {
        List<String> tagList = new ArrayList<>();
        for(int i=0;i<tags.size();i++){
            String name = tags.get(i);
            name = name.replaceAll(" ", "");
            tagList.add(name);
        }
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        content = content.replaceAll("linmemhnebggaijoinhajeoyndohsgauhenkwin", "linjiewhngguyeamjhghoaonknmnioeebdnihgjloenewason/" + simpleDateFormat.format(date));
        System.out.println("test1");
        System.out.println(content);
        System.out.println("test END");
        UserInfo userInfo = findUserInfo.findUserInfo(author);
        String seqNum = makeSequence("Question");
        String previews = (content.length() < 100) ? content : content.substring(0, 100);
        //author = "DBRef(\"UserInfo\", " + author + ")";

        Question question = new Question(seqNum, title, userInfo, tagList, content, previews);
        questionRepository.save(question);
        userInfo = addPoint.addPoint("createQuestion", author);
        question.setAuthor(userInfo);
        return question;
    }
}
