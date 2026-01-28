package com.socialMedia.social_media_application.controller;

import com.socialMedia.social_media_application.models.Post;
import com.socialMedia.social_media_application.models.User;
import com.socialMedia.social_media_application.response.ApiResponse;
import com.socialMedia.social_media_application.service.PostService;
import com.socialMedia.social_media_application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;


    @PostMapping("api/posts/create")
    public ResponseEntity<Post> createPost(
            @RequestHeader("Authorization") String jwt,@RequestBody Post post) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);
        Post createdPost = postService.createNewPost(post,reqUser.getId());
        return new ResponseEntity<>(createdPost, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/posts/{postId}/delete")
    public ResponseEntity<ApiResponse> deletePost(
            @PathVariable Integer postId,
            @RequestHeader("Authorization") String jwt) {

        try {
            // get current user from JWT
            User reqUser = userService.findUserByJwt(jwt);

            // attempt delete
            String message = postService.deletePost(postId, reqUser.getId());

            // success response
            return ResponseEntity.ok(
                    new ApiResponse(message, true)
            );

        } catch (Exception e) {
            // error response (not authorized / other issues)
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }

    @GetMapping("/posts/{postId}")
    public ResponseEntity<Post> findPostByIdHandler(@PathVariable Integer postId) throws Exception {
        Post post = postService.findPostById(postId);
        return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
    }

    @GetMapping("/posts/user")
    public ResponseEntity<List<Post>> findUsersPost(@RequestHeader("Authorization") String jwt) {

        User reqUser = userService.findUserByJwt(jwt);
        List<Post> posts = postService.findPostsByUserId(reqUser.getId());
        return new ResponseEntity<List<Post>>(posts, HttpStatus.ACCEPTED);
    }

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> findAllPosts() {
        List<Post> posts = postService.findAllPosts();
        return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
    }

    @PutMapping("/posts/{postId}/save")
    public ResponseEntity<Post> savedPostHandler(@PathVariable Integer postId, @RequestHeader("Authorization") String jwt) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);

        Post post = postService.savedPost(reqUser.getId(),postId);
        return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
    }

    @PutMapping("/posts/{postId}/like")
    public ResponseEntity<Post> likedPostHandler(@PathVariable Integer postId, @RequestHeader("Authorization") String jwt) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);

        Post post = postService.likedPost(reqUser.getId(),postId);
        return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
    }

}