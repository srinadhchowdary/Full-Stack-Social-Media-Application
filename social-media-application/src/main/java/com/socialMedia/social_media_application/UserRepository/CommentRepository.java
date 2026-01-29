package com.socialMedia.social_media_application.UserRepository;

import com.socialMedia.social_media_application.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface CommentRepository extends JpaRepository<Comment,Integer> {
}
