package com.college.fooddelivery.entity;

import jakarta.persistence.Entity;

@Entity
public class productEntity {
    private Long productId;
    private String name;
    private String description;
    private Double price;
    private String image;
}
//  id: '1',
//     name: 'Classic Beef Burger',
//     description: 'Juicy beef patty with fresh lettuce, tomatoes, and our special sauce',
//     price: 12.99,
//     image: burgerImg,
//     category: 'Burgers',