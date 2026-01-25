package com.socialMedia.social_media_application.service;

import com.socialMedia.social_media_application.models.Post;
import java.util.List;

public interface PostService {

    Post createNewPost(Post post, Integer userId) throws Exception;

    String deletePost(Integer postId,Integer userId) throws Exception;

    List<Post> findPostsByUserId(Integer userId);

    List<Post> findAllPosts();

    Post findPostById(Integer postId);

    Post savedPost(Integer userId, Integer postId) throws Exception;

    Post likedPost(Integer userId, Integer postId) throws Exception;




}
