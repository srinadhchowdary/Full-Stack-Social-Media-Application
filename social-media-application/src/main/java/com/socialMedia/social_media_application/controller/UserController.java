package com.socialMedia.social_media_application.controller;

import com.socialMedia.social_media_application.UserRepository.UserRepository;
import com.socialMedia.social_media_application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUsers() {
/*
        List<User> users=new ArrayList<>();

        User user1=new User(1,"code","zosh","codewithzosh@gmail.com","12345");
        User user2=new User(2,"raam","arora","raam@gmail.com","12345");

        users.add(user1);
        users.add(user2);

 */

        List<User> users= userRepository.findAll();
        return users;
    }

    @GetMapping("/users/{userId}")
    public Optional<User> getUserById(@PathVariable("userId") Integer id) throws Exception {

        Optional<User> user= userRepository.findById(id);
        if(user.isPresent()){
            return Optional.of(user.get());
        }
        throw new Exception("User not found with id "+id);
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {

        User newUser=new User();
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPassword(user.getPassword());
        newUser.setId(user.getId());

        User savedUser=userRepository.save(newUser);
        return savedUser;
    }

    @PutMapping("/users/{userId}")
    public User updateUser(@RequestBody User user, @PathVariable("userId") Integer userId) throws Exception {

        Optional<User> user1=userRepository.findById(userId);

        if(user1.isEmpty()){
            throw new Exception("User not found with id "+userId);
        }

        User oldUser=user1.get();

        if(user.getFirstName()!=null) {
            oldUser.setFirstName(user.getFirstName());
        }
        if(user.getLastName()!=null) {
            oldUser.setLastName(user.getLastName());
        }
        if(user.getEmail()!=null) {
            oldUser.setEmail(user.getEmail());
        }

        User updatedUser=userRepository.save(oldUser);
        return updatedUser;

        /*
        User user1=new User(1,"code","zosh","codewithzosh@gmail.com","12345");
        System.out.println(user1.toString());

        if(user.getFirstName()!=null) {
            user1.setFirstName(user.getFirstName());
        }
        if(user.getLastName()!=null) {
            user1.setLastName(user.getLastName());
        }
        if(user.getEmail()!=null) {
            user1.setEmail(user.getEmail());
        }
        System.out.println(user1.toString());

        return user1;

         */
    }

    @DeleteMapping("users/{userId}")
    public String deleteUser(@PathVariable("userId") Integer userId) throws Exception {

        Optional<User> user=userRepository.findById(userId);

        User oldUser = null;

        if(user.isPresent()){
            oldUser=user.get();
        }

        if(user.isEmpty()){
            throw new Exception("User not found with id "+userId);
        }
        if(oldUser!=null) {
            userRepository.deleteById(userId);
        }
        return "User deleted successfully with id "+userId;
    }

}
