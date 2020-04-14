package reverseproxy.proxy.AOP;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.aspectj.lang.annotation.Around;

@Aspect
@Component
public class Log {
    @Around("execution(* reverseproxy.proxy.Command.*.*(..) )")
    public Object aroundAdvice(ProceedingJoinPoint pjp) throws Throwable {

        System.out.println("=== " + pjp.getSignature().getName() + " ===");

        Object result = pjp.proceed();

        System.out.println(result.toString());

        System.out.println("=== finished ===");

        return result;
    }
}
