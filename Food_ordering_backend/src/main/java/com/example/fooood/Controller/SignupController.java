package com.example.fooood.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.fooood.Model.User;
import com.example.fooood.Repository.Repository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/signup")
public class SignupController {

    @Autowired
    private Repository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping
    public ResponseEntity<String> signup(@RequestBody User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists");
        }

        userRepository.save(user);

        // Send email
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(user.getEmail());
        message.setSubject("Signup Confirmation");
        message.setText("Thank you for signing up! " + user.getUsername() + "\n\n\nWith Regards\n\nFoodBear Team");
        mailSender.send(message);

        // Send SMS (assuming you have a SmsService implemented)

        return ResponseEntity.ok("Signup successful");
    }
}
