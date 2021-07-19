package com.abhiSpringBoot.spring.security.postgresql.repository;

import com.abhiSpringBoot.spring.security.postgresql.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    public List<Product> findByUsername(String username);
}