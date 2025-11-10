package com.college.fooddelivery.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.college.fooddelivery.model.UserModel;

public interface UserRepository extends JpaRepository <UserModel, Long>{

    
} 
