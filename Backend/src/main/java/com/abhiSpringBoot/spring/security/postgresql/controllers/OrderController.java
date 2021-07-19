package com.abhiSpringBoot.spring.security.postgresql.controllers;

import com.abhiSpringBoot.spring.security.postgresql.Service.OrderService;
import com.abhiSpringBoot.spring.security.postgresql.models.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/test")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/orders")
    @ResponseStatus(HttpStatus.OK)
    public List<Order> getProduct()
    {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        return orderService.getOrderUsername(username);
    }

    @PostMapping("/order")
    @ResponseStatus(HttpStatus.CREATED)
    public Order addProduct(@RequestBody Order order)
    {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        order.setUsername(username);
        return orderService.addOrder(order);
    }

}
