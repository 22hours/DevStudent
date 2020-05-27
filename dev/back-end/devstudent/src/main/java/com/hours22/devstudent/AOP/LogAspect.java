package com.hours22.devstudent.AOP;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LogAspect {
    @Around("execution(* com.hours22.devstudent.Controller.*.*(..) )")
    public Object aroundAdvice(ProceedingJoinPoint pjp) throws Throwable {

        System.out.println("=== " + pjp.getSignature().getName() + " ===");

        Object result = pjp.proceed();

        System.out.println(result.toString());

        System.out.println("=== finished ===");

        return result;
    }
}
