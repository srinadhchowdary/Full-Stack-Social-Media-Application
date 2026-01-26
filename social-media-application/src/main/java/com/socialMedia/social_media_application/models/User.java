package com.socialMedia.social_media_application.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")

@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String gender;

    private List<Integer> Followers = new ArrayList<>();
    private List<Integer> Following = new ArrayList<>();

    @JsonIgnore
    @ManyToMany
    private List<Post> savedPosts = new ArrayList<>();
}
