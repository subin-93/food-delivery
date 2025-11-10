package com.college.fooddelivery.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.college.fooddelivery.model.UserModel;
import com.college.fooddelivery.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class UserController {

  private final UserService userService;


  @PostMapping("/signup")
  public ResponseEntity createUser(@Valid @RequestBody UserModel user){
    userService.createUser(user);
    return null;
  } 
}
