package com.example.fooood.Service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.fooood.Model.User;
import com.example.fooood.Repository.Repository;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    private Repository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setUsername(userDetails.getUsername());
        user.setEmail(userDetails.getEmail());
        user.setPhonenumber(userDetails.getPhonenumber());
        user.setPassword(userDetails.getPassword());
        return userRepository.save(user);
    }

    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    public void deleteUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.delete(user);
    }
}

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;

// // import com.example.fooood.Model.JoinedEvent;
// import com.example.fooood.Model.User;
// import com.example.fooood.Repository.Repository;

// @org.springframework.stereotype.Service
// public class Service {
// @Autowired
// private Repository userRepository;

// public User saveUser(User user) {
// return userRepository.save(user);
// }

// public Optional<User> getUserById(Long id) {
// return userRepository.findById(id);
// }

// public User getUserByUsername(String username) {
// return userRepository.findByUsername(username);
// }

// public List<User> getAllUsers() {
// return userRepository.findAll();
// }

// public void deleteUser(Long id) {
// userRepository.deleteById(id);
// }

// // public User updateJoinedEvent(Long userId, JoinedEvent joinedEvent) {
// // Optional<User> userOpt = userRepository.findById(userId);
// // if (userOpt.isPresent()) {
// // User user = userOpt.get();
// // user.addJoinedEvent(joinedEvent);
// // return userRepository.save(user);
// // }
// // return null;
// // }
// }
