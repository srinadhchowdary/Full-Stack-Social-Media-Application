package com.socialMedia.social_media_application.request;


import com.socialMedia.social_media_application.models.User;
import lombok.Data;

@Data
public class CreateChatRequest {
    
    private Integer userId;
    
}