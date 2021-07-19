package com.abhiSpringBoot.spring.security.postgresql.Service;


import com.abhiSpringBoot.spring.security.postgresql.models.Product;
import com.abhiSpringBoot.spring.security.postgresql.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public Product addProduct(Product product){
        return productRepository.save(product);
    }

    public List<Product> allProducts(String username) {
        List<Product> response = new ArrayList<Product>();
        List<Product> products = productRepository.findAll();
        for(Product product : products){
            if(product.getUsername().equals(username))
                continue;
            response.add(product);
        }
        return response;
    }

    public List<Product> myProducts(String username) {
        return productRepository.findByUsername(username);
    }

    public void deleteProduct(Long Id) {
        productRepository.deleteById(Id);
    }
}