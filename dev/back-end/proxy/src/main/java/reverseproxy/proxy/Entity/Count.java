package reverseproxy.proxy.Entity;

import lombok.Getter;

@Getter
public class Count {
    private int count;
    public Count(int count) {
        this.count = count;
    }
}
