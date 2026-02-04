package com.socialMedia.social_media_application.service;

import com.socialMedia.social_media_application.models.Message;
import com.socialMedia.social_media_application.models.User;

import java.util.List;

public interface MessageService {
    
    public Message createMessage(User user, Integer chatId, Message req) throws Exception;
    
    public List<Message> findChatsMessages(Integer chatId) throws Exception;
    
}