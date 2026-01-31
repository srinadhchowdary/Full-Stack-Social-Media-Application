package com.socialMedia.social_media_application.service;

import com.socialMedia.social_media_application.models.Reels;
import com.socialMedia.social_media_application.models.User;

import java.util.List;

public interface ReelsService {
    
    public Reels createReel(Reels reel, User user);
    
    public List<Reels> findAllReels();
    
    public List<Reels> findReelsByUserId(Integer userId) throws Exception;
    
}