package com.socialMedia.social_media_application.controller;

import com.socialMedia.social_media_application.models.Story;
import com.socialMedia.social_media_application.models.User;
import com.socialMedia.social_media_application.service.StoryService;
import com.socialMedia.social_media_application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StoryController {
    
    
    @Autowired
    private StoryService storyService;
    
    @Autowired
    private UserService userService;
    
    
    @PostMapping("/api/create/story")
    public Story createStory(@RequestBody Story story , @RequestHeader("Authorization") String jwt) {
        
        User user = userService.findUserByJwt(jwt);
        Story createdStory = storyService.createStory(story,user);
        return createdStory;    
    }

    @GetMapping("/api/story/user/{userId}")
    public List<Story> findUsersStory(@PathVariable Integer userId,@RequestHeader("Authorization") String jwt) throws Exception {
        User reqUser = userService.findUserByJwt(jwt);
        List<Story> stories = storyService.findStoryByUserId(userId);
        return stories;
    }
    
}