package com.socialMedia.social_media_application.service;

import com.socialMedia.social_media_application.UserRepository.PostRepository;
import com.socialMedia.social_media_application.UserRepository.UserRepository;
import com.socialMedia.social_media_application.models.Post;
import com.socialMedia.social_media_application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImplementation implements PostService{

    @Autowired
    PostRepository postRepository;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;


    @Override
    public Post createNewPost(Post post, Integer userId) throws Exception {

        User user = userService.findUserById(userId);

        Post newPost = new Post();
        newPost.setCaption(post.getCaption());
        newPost.setImage(post.getImage());
        newPost.setVideo(post.getVideo());
        newPost.setUser(user);
        return newPost;
    }

    @Override
    public String deletePost(Integer postId, Integer userId) throws Exception {

        Post post = findPostById(postId);
        User user = userService.findUserById(userId);
        if (!post.getUser().getId().equals(user.getId())) {
            throw new Exception("You are not authorized to delete this post");
        }
        postRepository.delete(post);
        return "Post deleted successfully";
    }

    @Override
    public List<Post> findPostsByUserId(Integer userId) {
        return postRepository.findPostByUserId(userId);
    }

    @Override
    public List<Post> findAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Post findPostById(Integer postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() ->
                        new RuntimeException("Post not found with id: " + postId));
        return post;
    }


    @Override
    public Post savedPost(Integer userId, Integer postId) throws Exception {
        Post post = findPostById(postId);
        User user = userService.findUserById(userId);

        if(user.getSavedPosts().contains(post)){
            user.getSavedPosts().remove(post);
        }
        else{
            user.getSavedPosts().add(post);
        }
        userRepository.save(user);
        return post;

    }

    @Override
    public Post likedPost(Integer userId, Integer postId) throws Exception {
        Post post = findPostById(postId);
        User user = userService.findUserById(userId);

        if(post.getLikedBy().contains(user)){
            post .getLikedBy().remove(user);
        }
        else{
            post.getLikedBy().add(user);
        }
        return postRepository.save(post);
    }
}
