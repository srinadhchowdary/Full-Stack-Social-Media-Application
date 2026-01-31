package com.socialMedia.social_media_application.controller;

import com.socialMedia.social_media_application.models.Reels;
import com.socialMedia.social_media_application.models.User;
import com.socialMedia.social_media_application.service.ReelsService;
import com.socialMedia.social_media_application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReelsController {
    
    @Autowired
    private ReelsService reelsService;
    
    @Autowired
    private UserService userService;
    
    
    @PostMapping("/api/create/reels")
    public Reels createReel(@RequestBody Reels reel, @RequestHeader("Authorization") String jwt) {
        
        User reqUser = userService.findUserByJwt(jwt);
        Reels createdReel = reelsService.createReel(reel,reqUser);
        return createdReel;
    }

    @GetMapping("/api/reels")
    public List<Reels> findAllReels() {
        
        List<Reels> reels = reelsService.findAllReels();
        return reels;
    }

    @GetMapping("/api/reels/user/{userId}")
    public List<Reels> findUserReels(@PathVariable Integer userId) throws Exception {

        List<Reels> reels = reelsService.findReelsByUserId(userId);
        return reels;
        
    }
    
}