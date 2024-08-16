package com.example.fooood.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.fooood.Model.User;
import com.example.fooood.Service.EmailService;
import com.example.fooood.Service.Service;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

    @Autowired
    private Service userService;
    // private Repository userRepository;
    @Autowired
    private EmailService emailService;

    // @PostMapping("/signup")
    // public String createUser(@RequestBody User user) {
    // userService.createUser(user);

    // emailService.sendEmail(
    // user.getEmail(),
    // "Signup Confirmation",
    // "Thank you for signing up, " + user.getUsername() + "!" +
    // "\n\n\n\nRegards Food Bear");
    // return "User registered successfully";
    // }

    // @PostMapping("/login")
    // public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
    // User user = userService.authenticateUser(loginRequest.getUsername(),
    // loginRequest.getPassword());
    // if (user != null) {
    // return ResponseEntity.ok("Login successful!");

    // }
    // return ResponseEntity.status(401).body("Invalid username or password");
    // }

    @GetMapping("/getdata")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/getdata/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/putdata/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userService.getUserById(id)
                .map(user -> ResponseEntity.ok(userService.updateUser(id, userDetails)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/deletedata/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable Long id) {
        return userService.getUserById(id)
                .map(user -> {
                    userService.deleteUser(id);
                    return ResponseEntity.noContent().build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.example.fooood.Model.User;
// import com.example.fooood.Service.Service;

// @RestController
// @RequestMapping("/users")
// @CrossOrigin(origins = "http://localhost:3000")
// public class Controller {

// @Autowired
// private Service userService;

// @PostMapping
// public ResponseEntity<User> createUser(@RequestBody User user) {
// User savedUser = userService.saveUser(user);
// return ResponseEntity.ok(savedUser);
// }

// @GetMapping("/{id}")
// public ResponseEntity<Optional<User>> getUserById(@PathVariable Long id) {
// Optional<User> user = userService.getUserById(id);
// return ResponseEntity.ok(user);
// }

// @GetMapping("/username/{username}")
// public ResponseEntity<User> getUserByUsername(@PathVariable String username)
// {
// User user = userService.getUserByUsername(username);
// return ResponseEntity.ok(user);
// }

// @GetMapping
// public ResponseEntity<List<User>> getAllUsers() {
// List<User> users = userService.getAllUsers();
// return ResponseEntity.ok(users);
// }

// @DeleteMapping("/{id}")
// public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
// userService.deleteUser(id);
// return ResponseEntity.noContent().build();
// }

// // @PostMapping("/{userId}/join-event")
// // public ResponseEntity<User> joinEvent(@PathVariable Long userId,
// @RequestBody
// // JoinedEvent joinedEvent) {
// // User updatedUser = userService.updateJoinedEvent(userId, joinedEvent);
// // if (updatedUser != null) {
// // return ResponseEntity.ok(updatedUser);
// // } else {
// // return ResponseEntity.notFound().build();
// // }
// // }
// }