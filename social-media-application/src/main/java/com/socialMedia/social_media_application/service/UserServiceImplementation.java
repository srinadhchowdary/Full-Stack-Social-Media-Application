package com.socialMedia.social_media_application.service;

import com.socialMedia.social_media_application.UserRepository.UserRepository;
import com.socialMedia.social_media_application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User registerUser(User user) {
        User newUser=new User();
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPassword(user.getPassword());
        newUser.setId(user.getId());
        newUser.setGender(user.getGender());

        User savedUser=userRepository.save(newUser);
        return savedUser;    }

    @Override
    public User findUserById(Integer userId) throws Exception {
        Optional<User> user= userRepository.findById(userId);
        if(user.isPresent()){
            return user.get();
        }
        throw new Exception("User not found with id "+userId);
    }

    @Override
    public User findUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return user;

    }

    @Override
    public User followUser(Integer userId, Integer userToFollowId) throws Exception {

        if (userId.equals(userToFollowId)) {
            throw new Exception("User cannot follow himself");
        }

        User user = findUserById(userId);
        User userToFollow = findUserById(userToFollowId);

        // Add follower & following
        userToFollow.getFollowers().add(user.getId());
        user.getFollowing().add(userToFollow.getId());

        // Save both users
        userRepository.save(userToFollow);
        userRepository.save(user);

        return user;
    }


    @Override
    public User updateUser(User user, Integer userId) throws Exception {
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
    }

    @Override
    public List<User> searchUsers(String query) {
        return userRepository.searchUser(query);
    }
}
