package reverseproxy.proxy.GraphQLMainServer.Find;

import com.google.gson.Gson;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Command.Security.GetNicknameInToken;
import reverseproxy.proxy.Entity.Count;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;

@Component
public class FindQuestionBy_id extends ConnectMainServer {
    @Autowired
    GetNicknameInToken getNicknameInToken;

    public Question findQuestionBy_id(String _id, DataFetchingEnvironment env) {
        String nickname;
        GraphQLContext context =  env.getContext();
        HttpServletRequest request = context.getHttpServletRequest().get();
        nickname = getNicknameInToken.getNicknameInToken(env);

        //region Query
        String query = "query{\n" +
                "    findQuestionBy_id(_id:\"" + _id + "\", nickname:\"" + nickname + "\"){\n" +
                "        title\n" +
                "        _id\n" +
                "        author\n" +
                "        tags\n" +
                "        date\n" +
                "        content\n" +
                "        previews\n" +
                "        answerCount\n" +
                "        likesCount\n" +
                "        isLiked\n" +
                "        views\n" +
                "        adoptedAnswerId\n" +
                "        likes{\n" +
                "            nickname\n" +
                "            status\n" +
                "        }\n" +
                "        comments{\n" +
                "            _id\n" +
                "            author\n" +
                "            content\n" +
                "            date\n" +
                "        }\n" +
                "        answers{\n" +
                "            _id\n" +
                "            author\n" +
                "            content\n" +
                "            date\n" +
                "            likesCount\n" +
                "            isLiked\n" +
                "            comments{\n" +
                "                _id\n" +
                "                author\n" +
                "                content\n" +
                "                date\n" +
                "            }\n" +
                "            likes{\n" +
                "                nickname\n" +
                "                status\n" +
                "            }\n" +
                "        }\n" +
                "    }\n" +
                "}";
        //endregion
        Gson gson = new Gson();
        String name = new Object() {
        }.getClass().getEnclosingMethod().getName();
        String str = getResponse(query, name);
        Question question = gson.fromJson(str, Question.class);
        return question;
    }
}
