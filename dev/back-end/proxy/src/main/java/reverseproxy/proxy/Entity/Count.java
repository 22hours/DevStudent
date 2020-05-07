package reverseproxy.proxy.Entity;

import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class Count {
    private String count;
    public Count(String count) {
        this.count = count;
    }
}
