package com.socialMedia.social_media_application.service;

import com.socialMedia.social_media_application.UserRepository.ReelsRepository;
import com.socialMedia.social_media_application.models.Reels;
import com.socialMedia.social_media_application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReelsServiceImplementation implements ReelsService{
    
    @Autowired
    private ReelsRepository reelsRepository;
    
    @Autowired
    private UserService userService;
    
    @Override
    public Reels createReel(Reels reel, User user) {
        
        Reels createdReel = new Reels();
        createdReel.setTitle(reel.getTitle());
        createdReel.setVideo(reel.getVideo());
        createdReel.setUser(user);
        
        return reelsRepository.save(createdReel);
    }

    @Override
    public List<Reels> findAllReels() {
        return reelsRepository.findAll();
    }

    @Override
    public List<Reels> findReelsByUserId(Integer userId) throws Exception {
        
        userService.findUserById(userId);
        return reelsRepository.findByUserId(userId);
        

    }
}