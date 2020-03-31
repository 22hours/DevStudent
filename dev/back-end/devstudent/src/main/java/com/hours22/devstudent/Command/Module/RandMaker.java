package com.hours22.devstudent.Command.Module;

import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class RandMaker {
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

    public String getKey(boolean lowerCheck, int size) {
        this.lowerCheck = lowerCheck;
        this.size = size;
        return generateKey();
    }
}
