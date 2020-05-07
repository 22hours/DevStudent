package loginserver.loginserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@EnableAspectJAutoProxy
@SpringBootApplication
@EnableScheduling
public class LoginserverApplication {
    public static void main(String[] args) {
        SpringApplication.run(LoginserverApplication.class, args);
    }
}
