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
import org.springframework.web.util.UriComponentsBuilder;
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
        String nickname = getNicknameInToken.getNicknameInToken(env);
        String url ="http://localhost:8090/main/question/find";
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
        builder.queryParam("_id",_id);
        builder.queryParam("nickname",nickname);
        Gson gson = new Gson();
        String str = getResponse(builder);
        Question question = gson.fromJson(str, Question.class);
        return question;
    }
}
