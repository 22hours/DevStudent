package reverseproxy.proxy.GraphQLLoginServer.Login;

import com.google.gson.Gson;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import org.apache.http.HttpRequest;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.User;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

@Component
public class Login extends ConnectLoginServer {
    public User loginToServer(String email, String password, DataFetchingEnvironment env) {
        GraphQLContext context =  env.getContext();
        HttpServletRequest request = context.getHttpServletRequest().get();
        String ip = request.getHeaders("ip").nextElement();
        System.out.println(ip);
        System.out.println();


        request.getHeader("content-type");
        System.out.println(request.getHeader("content-type").toString());
        //System.out.println(request.getHeader("Authorization").toString());
        System.out.println("------------");
        System.out.println("테스트");
        System.out.println(request.getHeaders("HTTP_CLIENT_IP").toString());
        System.out.println("------------");
        System.out.println(request.getRemoteAddr().toString());

        //region Query
        String query = "mutation{\n" +
                "    loginToServer(email:\"" + email + "\",password:\"" + password + "\", ip:\"" + ip + "\")\n" +
                "    {\n" +
                "        email\n" +
                "        password\n" +
                "        nickname\n" +
                "        schoolName\n" +
                "        date\n" +
                "        authState\n" +
                "        accessToken\n" +
                "    }\n" +
                "\n" +
                "}";
        //endregion
        Gson gson = new Gson();
        String name = new Object() {
        }.getClass().getEnclosingMethod().getName();
        String str = getResponse(query, name);
        System.out.println(str);
        User user = gson.fromJson(str, User.class);
        return user;
    }
}
