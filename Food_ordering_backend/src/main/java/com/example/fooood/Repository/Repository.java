package com.example.fooood.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.fooood.Model.User;

public interface Repository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    boolean existsByUsername(String username);
}
