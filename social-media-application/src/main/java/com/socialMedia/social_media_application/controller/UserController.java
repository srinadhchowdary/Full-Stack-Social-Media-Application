package com.socialMedia.social_media_application.controller;

import com.socialMedia.social_media_application.UserRepository.UserRepository;
import com.socialMedia.social_media_application.models.User;
import com.socialMedia.social_media_application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {


    @Autowired
    UserRepository userRepository;
    @Autowired
    UserService userService;

    @GetMapping("/api/users")
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

    @GetMapping("/api/users/{userId}")
    public User getUserById(@PathVariable("userId") Integer id) throws Exception {

        User user = userService.findUserById(id);
        return user;
    }


    @PutMapping("/api/users/{userId}")
    public User updateUser(@RequestBody User user, @PathVariable("userId") Integer userId) throws Exception {

        User updatedUser=userService.updateUser(user, userId);

        return updatedUser;
    }

    @PutMapping("/api/users/{userId}/follow/{userToFollowId}")
    public User followUserHandler(@PathVariable ("userId") Integer userId,
                                  @PathVariable ("userToFollowId") Integer userToFollowId) throws Exception {

        User user=userService.followUser( userId, userToFollowId);
        return user;
    }


    @GetMapping("/api/users/search")
    public List<User> searchUsers(@RequestParam("query") String query) {
        List<User> users=userService.searchUsers(query);
        return users;
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
