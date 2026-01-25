package com.socialMedia.social_media_application.service;

import com.socialMedia.social_media_application.models.User;

import java.util.List;

public interface UserService {

    public User registerUser(User user);

    public User findUserById(Integer userId) throws Exception;

    public User findUserByEmail(String email);

    public User followUser(Integer userId, Integer userToFollowId) throws Exception ;

    public User updateUser(User user, Integer userId) throws Exception;

    public List<User> searchUsers(String query);

}
