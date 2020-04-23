package reverseproxy.proxy.Entity;

import lombok.Getter;

@Getter
public class Count {
    private String count;
    public Count(String count) {
        this.count = count;
    }
}
