package com.hours22.devstudent.Command;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Random;

@Component
public class AuthMailSend {
    @Autowired
    private JavaMailSender javaMailSender;

    private String generateKey() {
        Random random = new Random();
        StringBuffer ranKey = new StringBuffer();
        int num = 0;

        do {
            num = random.nextInt(75) + 48;
            if ((num >= 48 && num <= 57) || (num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
                ranKey.append((char) num);
            } else {
                continue;
            }
        } while (ranKey.length() < size);

        if (lowerCheck) {
            return ranKey.toString().toLowerCase();
        }
        return ranKey.toString();
    }

    private boolean lowerCheck;
    private int size;

    public String getKey(boolean lowerCheck, int size) {
        this.lowerCheck = lowerCheck;
        this.size = size;
        return generateKey();
    }

    public String authMailSend(String email, String _id) {
        System.out.println("authMailSend 시작");
        String key = getKey(false, 20);
        System.out.println("authMailSend 키테스트");
        System.out.println(key);
        System.out.println("authMailSend 보내기 시작");
        System.out.println("authMailSend 끝");
        MimeMessage mail = javaMailSender.createMimeMessage();
        String htmlStr = "<h2>안녕하세요. DevStudent 계정인증 메일입니다!</h2><br><br>"
                + "<h3>" + _id + "님</h3>" + "<p>인증하기 버튼을 누르시면 로그인을 하실 수 있습니다 : <p>"
                //+ "<a href='http://devstudent/emailCheck/"+key+"'>인증하기</a></p>";
            +"<a href='https://af2d60b9.ngrok.io/emailCheck/"+key+"'>인증하기</a></p>";
//                + _id + "&#34;, authState:&#34;"+ key +"&#34;){_id, authState}}'>인증하기</a></p>";
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
