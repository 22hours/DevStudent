package com.hours22.devstudent.AOP;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Order(3)
public class LogAspect {
    @Around("execution(* com.hours22.devstudent.Command.*.*(..) )")
    public Object aroundAdvice(ProceedingJoinPoint pjp) throws Throwable {

        System.out.println("=== " + pjp.getSignature().getName() + " ===");

        Object result = pjp.proceed();

        System.out.println("=== finished ===");

        return result;
    }
}
