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

    @Column(name = "action",nullable = false)
    private String action;

    public Order(){}

    public Order(long id, String title, double price, String username,String action) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.username = username;
        this.action = action;
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

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", username='" + username + '\'' +
                ", action='" + action + '\'' +
                '}';
    }
}
