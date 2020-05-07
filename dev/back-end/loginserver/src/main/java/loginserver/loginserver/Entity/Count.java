package loginserver.loginserver.Entity;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Count {
    private String count;

    public Count(String count) {
        this.count = count;
    }
}
