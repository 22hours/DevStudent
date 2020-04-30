package reverseproxy.proxy.Command;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.*;
import reverseproxy.proxy.GraphQLMainServer.Find.FindUserByNickname;
import reverseproxy.proxy.GraphQLMainServer.Count.CountAllQuestions;
import reverseproxy.proxy.GraphQLMainServer.Count.CountTags;
import reverseproxy.proxy.GraphQLMainServer.Count.CountUnreadAlarms;
import reverseproxy.proxy.GraphQLMainServer.Find.*;

import java.util.List;

@Component
public class Query implements GraphQLQueryResolver {
    @Autowired
    private FindAllQuestions findAllQuestions;
    @Autowired
    private FindQuestionsByTags findQuestionsByTags;
    @Autowired
    private FindQuestionBy_id findQuestionBy_id;
    @Autowired
    private FindQuestionsByOption findQuestionsByOption;
    @Autowired
    private FindAllAlarms findAllAlarms;
    @Autowired
    private CountUnreadAlarms countUnreadAlarms;
    @Autowired
    private CountAllQuestions countAllQuestions;
    @Autowired
    private FindUserByNickname findUserByNickname;
    @Autowired
    private CountTags countTags;


    public List<Question> findAllQuestions(String param, int pageNum, int requiredCount) {
        return findAllQuestions.findAllQuestions(param, pageNum, requiredCount);
    }

    public List<Question> findQuestionsByOption(String param, String option, String searchContent, int pageNum, int requiredCount) {
        return findQuestionsByOption.findQuestionsByOption(param, option, searchContent, pageNum, requiredCount);
    }

    public Question findQuestionBy_id(String _id, DataFetchingEnvironment env) {
        return findQuestionBy_id.findQuestionBy_id(_id, env);
    }

    public List<Question> findQuestionsByTags(String param, int pageNum, int requiredCount, List<String> tags, String logical) {
        return findQuestionsByTags.findQuestionsByTags(param, pageNum, requiredCount, tags, logical);
    }

    public List<Alarm> findAllAlarms(String nickname, int pageNum, int requiredCount){
        return findAllAlarms.findAllAlarms(nickname, pageNum, requiredCount);
    }

    public Count countUnreadAlarms(String nickname) {
        return countUnreadAlarms.countUnreadAlarms(nickname);
    }

    public Count countAllQuestions() {
        return countAllQuestions.countAllQuestions();
    }

    public UserInfo findUserByNickname(String nickname) {
        return findUserByNickname.findUserByNickname(nickname);
    }
    public List<Tag> countTags(int requiredCount, List<String> tags){
        return countTags.countTags(requiredCount, tags);
    }
}
