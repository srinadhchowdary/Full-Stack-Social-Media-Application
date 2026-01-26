package com.socialMedia.social_media_application.controller;

import com.socialMedia.social_media_application.models.Post;
import com.socialMedia.social_media_application.response.ApiResponse;
import com.socialMedia.social_media_application.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostService postService;


    @PostMapping("/posts/{userId}/create")
    public ResponseEntity<Post> createPost(@RequestBody Post post, @PathVariable Integer userId) throws Exception {

        Post createdPost = postService.createNewPost(post,userId);
        return new ResponseEntity<>(createdPost, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/posts/{postId}/delete/{userId}")
    public ResponseEntity<ApiResponse> deletePost(@PathVariable Integer postId, @PathVariable Integer userId) throws Exception {
        String message = postService.deletePost(postId, userId);
        ApiResponse apiResponse = new ApiResponse(message, true);
        return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/posts/{postId}")
    public ResponseEntity<Post> findPostByIdHandler(@PathVariable Integer postId) throws Exception {
        Post post = postService.findPostById(postId);
        return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
    }

    @GetMapping("/posts/user/{userId}")
    public ResponseEntity<List<Post>> findUsersPost(@PathVariable Integer userId) {
        List<Post> posts = postService.findPostsByUserId(userId);
        return new ResponseEntity<List<Post>>(posts, HttpStatus.ACCEPTED);
    }

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> findAllPosts() {
        List<Post> posts = postService.findAllPosts();
        return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
    }

    @PutMapping("/posts/{postId}/user/{userId}/save")
    public ResponseEntity<Post> savedPostHandler(@PathVariable Integer postId, @PathVariable Integer userId) throws Exception {

        Post post = postService.savedPost(userId,postId);
        return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
    }

    @PutMapping("/posts/{postId}/user/{userId}/like")
    public ResponseEntity<Post> likedPostHandler(@PathVariable Integer postId, @PathVariable Integer userId) throws Exception {

        Post post = postService.likedPost(userId,postId);
        return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
    }

}