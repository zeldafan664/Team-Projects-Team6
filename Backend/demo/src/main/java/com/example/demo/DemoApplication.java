package com.example.demo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
@SpringBootApplication
@RestController
@RequestMapping("/api")
public class DemoApplication {
@GetMapping("/message")
    	public ResponseEntity<String> getMessage() {
        String message = "CAN YOU HEAR ME??????";
        return ResponseEntity.ok().contentType(MediaType.TEXT_PLAIN).body(message);
    }
	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry registry){
				registry.addMapping("/**").allowedMethods("*").allowedOrigins("http://localhost:3000");
				
			}

		};
	}
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		
	}

}


