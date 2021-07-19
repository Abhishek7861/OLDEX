package com.abhiSpringBoot.spring.security.postgresql.models;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title",nullable=false)
    private String title;

    @Column(name = "price",nullable=false)
    private double price;

    @Column(name = "username",nullable = false)
    private String username;

    public Order(){}

    public Order(long id, String title, double price, String username) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.username = username;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
