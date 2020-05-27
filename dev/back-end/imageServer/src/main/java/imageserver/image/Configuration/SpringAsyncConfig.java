package imageserver.image.Configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class SpringAsyncConfig {

    @Bean(name = "DummyFile")
    public Executor threadPooluploadDummyFile() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("upload-");
        taskExecutor.initialize();
        return taskExecutor;
    }

    @Bean(name = "RealFile")
    public Executor threadPooluploadRealFile() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(5); // 기본 스레드 개수
        taskExecutor.setMaxPoolSize(100); // 큐카파 넘어가면 스레드 축 생성
        taskExecutor.setQueueCapacity(30); // 스레드 대기 큐
        taskExecutor.setThreadNamePrefix("upload-");
        taskExecutor.initialize();
        return taskExecutor;
    }
}
