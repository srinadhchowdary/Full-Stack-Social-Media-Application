package com.socialMedia.social_media_application.UserRepository;

import com.socialMedia.social_media_application.models.Reels;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReelsRepository extends JpaRepository<Reels,Integer> {
    
    public List<Reels> findByUserId(Integer userId) throws Exception;
}