package pl.natsoft.fireball;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FireballApplication {
    /**
     * <a href="https://cloud.google`.com/appengine/docs/flexible/java/how-instances-are-managed#health_checking">
     * App Engine health checking</a> requires responding with 200 to {@code /_ah/health}.
     */
    @RequestMapping("/_ah/health")
    public String healthy() {
        return "Still surviving.";
    }

    public static void main(String[] args) {
        SpringApplication.run(FireballApplication.class, args);
    }
}
