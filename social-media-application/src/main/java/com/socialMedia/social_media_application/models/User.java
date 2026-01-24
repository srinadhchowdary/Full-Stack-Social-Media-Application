package com.socialMedia.social_media_application.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

}
