package com.socialMedia.social_media_application.service;

import com.socialMedia.social_media_application.models.Chat;
import com.socialMedia.social_media_application.models.User;

import java.util.List;

public interface ChatService {
    
    public Chat createChat(User reqUser , User user2);
    
    public Chat findChatById(Integer chatId) throws Exception;
    
    public List<Chat> findUsersChat(Integer userId);
    
}