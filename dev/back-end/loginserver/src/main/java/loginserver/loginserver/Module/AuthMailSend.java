package loginserver.loginserver.Module;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Component
public class AuthMailSend {
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private RandMaker randMaker;

    public String authMailSend(String email, String nickname) {
        System.out.println("authMailSend 시작");
        String key = randMaker.getKey(false, 20);
        System.out.println("authMailSend 키테스트");
        System.out.println(key);
        System.out.println("authMailSend 보내기 시작");
        System.out.println("authMailSend 끝");
        MimeMessage mail = javaMailSender.createMimeMessage();
        String htmlStr = "<h2>안녕하세요. DevStudent 계정인증 메일입니다!</h2><br><br>"
                + "<h3>" + nickname + "님</h3>" + "<p>인증 코드를 입력하시면 인증에 성공합니다 :) <p>인증 코드 : "
                //+ "<a href='http://devstudent/emailCheck/"+key+"'>인증하기</a></p>";
                + key + "'>인증하기</p>";
        try {
            System.out.println("setSubject");
            mail.setSubject("[본인인증] 안녕하세요. DevStudent 계정인증 메일입니다!", "utf-8");
            System.out.println("setText");
            mail.setText(htmlStr, "utf-8", "html");
            System.out.println("addRecipient");
            mail.addRecipient(Message.RecipientType.TO, new InternetAddress(email));
            System.out.println("send");
            javaMailSender.send(mail);
            System.out.println("mail 끝");
        } catch (MessagingException e) {
            e.printStackTrace();
            return "error";
        }
        return key;
    }
}
