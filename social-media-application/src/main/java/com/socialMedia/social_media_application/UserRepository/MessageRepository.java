package com.socialMedia.social_media_application.UserRepository;

import com.socialMedia.social_media_application.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message,Integer> {
    
    public List<Message> findByChatId(Integer chatId);
}