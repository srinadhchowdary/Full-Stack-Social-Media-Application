package com.socialMedia.social_media_application.service;

import com.socialMedia.social_media_application.exceptions.UserException;
import com.socialMedia.social_media_application.models.User;

import java.util.List;

public interface UserService {

    public User registerUser(User user);

    public User findUserById(Integer userId) throws UserException;

    public User findUserByEmail(String email);

    public User followUser(Integer userId, Integer userToFollowId) throws UserException;

    public User updateUser(User user, Integer userId) throws UserException;

    public List<User> searchUsers(String query);

    public User findUserByJwt(String jwt);

}
