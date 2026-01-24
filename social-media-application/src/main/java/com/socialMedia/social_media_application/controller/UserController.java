package com.socialMedia.social_media_application.controller;

import com.socialMedia.social_media_application.models.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @GetMapping("/users")
    public List<User> getUsers() {

        List<User> users=new ArrayList<>();

        User user1=new User(1,"code","zosh","codewithzosh@gmail.com","12345");
        User user2=new User(2,"raam","arora","raam@gmail.com","12345");

        users.add(user1);
        users.add(user2);

        return users;
    }

    @GetMapping("/users/{userId}")
    public User getUserById(@PathVariable("userId") Integer id) {

        User user1=new User(1,"code","zosh","codewithzosh@gmail.com","12345");
        user1.setId(id);

        return user1;
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {

        User newUser=new User();
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPassword(user.getPassword());
        newUser.setId(user.getId());

        return newUser;
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user) {

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
    }

    @DeleteMapping("users/{userId}")
    public String deleteUser(@PathVariable("userId") Integer userId) {

        return "user deleted successfully with id "+userId;
    }

}
