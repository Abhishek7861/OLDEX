package com.abhiSpringBoot.spring.security.postgresql.Service;

import com.abhiSpringBoot.spring.security.postgresql.models.User;
import com.abhiSpringBoot.spring.security.postgresql.payload.response.ResponseHandler;
import com.abhiSpringBoot.spring.security.postgresql.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public Optional<User> getUser(String username){
        Optional<User> user =  userRepository.findByUsername(username);
        return user;
    }

    public ResponseEntity<Object> updateUser(String username, User newUser) {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            if (user.equals(newUser)) {
                System.out.println("Email or Username Already exists!");
                return ResponseHandler.generateResponse("User Already exists!", HttpStatus.BAD_REQUEST, newUser);
            }
        }
        userRepository.save(newUser);
        return ResponseHandler.generateResponse("User Updated!", HttpStatus.OK, newUser);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }
}
