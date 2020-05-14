package com.hours22.devstudent.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class SpringAsyncConfig {

    @Bean(name = "findUserByNickname")
    public Executor threadPoolfindUserByNickname() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("find-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "updateUserInfo")
    public Executor threadPoolupdateUserInfo() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("update-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "countTags")
    public Executor threadPoolcountTags() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("count-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "countUnreadAlarm")
    public Executor threadPoolcountUnreadAlarm() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("count-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "countAllQuestions")
    public Executor threadPoolcountAllQuestions() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("count-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "createComment")
    public Executor threadPoolcreateComment() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("create-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "createAnswer")
    public Executor threadPoolcreateAnswer() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("create-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "deleteAlarm")
    public Executor threadPooldeleteAlarm() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("delete-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "allAlarms")
    public Executor threadPoolallAlarms() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("find-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "updateAdapt")
    public Executor threadPoolupdateAdapt() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("update-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "createLike")
    public Executor threadPoolcreateLike() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("create-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "createQuestion")
    public Executor threadPoolcreateQuestion() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("create-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "homeKanban")
    public Executor threadPoolhomeKanban() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("find-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "QuestionsByTags")
    public Executor threadPoolQuestionsByTags() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("find-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "QuestionBy_id")
    public Executor threadPoolQuestionBy_id() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("find-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "QuestionsByOption")
    public Executor threadPoolQuestionsByOption() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("find-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "AllQuestions")
    public Executor threadPoolAllQuestions() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("find-");
        taskExecutor.initialize();
        return taskExecutor;
    }
}
