package com.socialMedia.social_media_application.service;

import com.socialMedia.social_media_application.models.Story;
import com.socialMedia.social_media_application.models.User;

import java.util.List;

public interface StoryService {
    
    public Story createStory(Story story, User user);
    
    public List<Story> findStoryByUserId(Integer userId) throws Exception;
    
}