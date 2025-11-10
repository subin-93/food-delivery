package com.college.fooddelivery.service;
import org.springframework.stereotype.Service;
import com.college.fooddelivery.model.UserModel;
import com.college.fooddelivery.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;


    public UserModel createUser(UserModel userModel){
        return userRepository.save(userModel);
    }


    
}
