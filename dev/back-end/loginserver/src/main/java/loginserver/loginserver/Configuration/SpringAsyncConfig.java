package loginserver.loginserver.Configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class SpringAsyncConfig {

    @Bean(name = "cuser")
    public Executor threadPoolcreateUser() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("create-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "UAuthState")
    public Executor threadPoolupdateUserAuthState() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("update-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "logindevstu")
    public Executor threadPoolloginToServer() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("auth-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "nickname")
    public Executor threadPoolcreateNickname() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("create-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "duplicateEmail")
    public Executor threadPoolcheckDuplicateEmail() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("count-");
        taskExecutor.initialize();
        return taskExecutor;
    }
}
