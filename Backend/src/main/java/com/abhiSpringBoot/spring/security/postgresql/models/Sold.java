package com.abhiSpringBoot.spring.security.postgresql.models;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Sold {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title",nullable=false)
    private String title;

    @Column(name = "price",nullable=false)
    private double price;

    @Column(name = "username",nullable = false)
    private String username;


}
