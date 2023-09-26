import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;



@RestController
@RequestMapping("/api")
public class MessageController {

    @GetMapping("/message")
    public ResponseEntity<String> getMessage() {
        String message = "Hello from Spring Boot!";
        return ResponseEntity.ok().contentType(MediaType.TEXT_PLAIN).body(message);
    }
}
