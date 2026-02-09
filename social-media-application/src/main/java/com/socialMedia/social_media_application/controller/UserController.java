package com.socialMedia.social_media_application.controller;

import com.socialMedia.social_media_application.UserRepository.UserRepository;
import com.socialMedia.social_media_application.exceptions.UserException;
import com.socialMedia.social_media_application.models.User;
import com.socialMedia.social_media_application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
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
    public User getUserById(@PathVariable("userId") Integer id) throws UserException {

        User user = userService.findUserById(id);
        return user;
    }


    @PutMapping("/api/users")
    public User updateUser(@RequestHeader("Authorization") String jwt,@RequestBody User user) throws UserException {
        User reqUser=userService.findUserByJwt(jwt);
        User updatedUser=userService.updateUser(user, reqUser.getId());

        return updatedUser;
    }

    @PutMapping("/api/users/follow/{userToFollowId}")
    public User followUserHandler(@RequestHeader("Authorization") String jwt,@PathVariable ("userToFollowId") Integer userToFollowId) throws UserException {

        User reqUser = userService.findUserByJwt(jwt);
        User user=userService.followUser(reqUser.getId(), userToFollowId);
        return user;
    }


    @GetMapping("/api/users/search")
    public List<User> searchUsers(@RequestParam("query") String query) {
        List<User> users=userService.searchUsers(query);
        return users;
    }


    @GetMapping("/api/users/profile")
    public ResponseEntity<?> getUserFromToken(@RequestHeader("Authorization") String jwt) {

        User user = userService.findUserByJwt(jwt);

        if (user == null) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid or expired token");
        }

        user.setPassword(null);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("users/{userId}")
    public String deleteUser(@PathVariable("userId") Integer userId) throws UserException {

        Optional<User> user=userRepository.findById(userId);

        User oldUser = null;

        if(user.isPresent()){
            oldUser=user.get();
        }

        if(user.isEmpty()){
            throw new UserException("User not found with id "+userId);
        }
        if(oldUser!=null) {
            userRepository.deleteById(userId);
        }
        return "User deleted successfully with id "+userId;
    }

}
