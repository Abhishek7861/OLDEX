package com.abhiSpringBoot.spring.security.postgresql.repository;

import com.abhiSpringBoot.spring.security.postgresql.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    public List<Order> findByUsername(String username);

    List<Order> findByUsername(long id);
}