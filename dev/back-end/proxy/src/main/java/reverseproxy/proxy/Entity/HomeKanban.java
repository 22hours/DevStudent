package reverseproxy.proxy.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@ToString
@Setter
@Getter
public class HomeKanban {
    private List<Question> date;
    private List<Question> answerCount;
    private List<Question> views;
    public HomeKanban(List<Question> date,List<Question> answerCount,List<Question> views){
        this.date = date;
        this.answerCount = answerCount;
        this.views = views;
    }
}