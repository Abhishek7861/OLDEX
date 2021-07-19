package com.abhiSpringBoot.spring.security.postgresql.Service;

import com.abhiSpringBoot.spring.security.postgresql.models.Order;
import com.abhiSpringBoot.spring.security.postgresql.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    public List<Order> getOrderUsername(String username){
        return orderRepository.findByUsername(username);
    }

    public Order addOrder(Order order){
        return orderRepository.save(order);
    }
}