package com.abhiSpringBoot.spring.security.postgresql.controllers;

import com.abhiSpringBoot.spring.security.postgresql.Service.ProductService;
import com.abhiSpringBoot.spring.security.postgresql.Service.UserService;
import com.abhiSpringBoot.spring.security.postgresql.models.Product;
import com.abhiSpringBoot.spring.security.postgresql.models.User;
import com.abhiSpringBoot.spring.security.postgresql.payload.response.ResponseHandler;
import com.abhiSpringBoot.spring.security.postgresql.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/test")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/addproduct")
    public ResponseEntity<Object> addproduct(@RequestBody Product product){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        product.setUsername(username);
        productService.addProduct(product);
        return ResponseHandler.generateResponse("Successful Add",HttpStatus.OK,product);
    }

    @GetMapping("/allproduct")
    public ResponseEntity<Object> allproduct(){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        List<Product> productList = productService.allProducts(username);
        return ResponseHandler.generateResponse("Successful",HttpStatus.OK,productList);
    }

    @GetMapping("/myproduct")
    public ResponseEntity<Object> myproduct(){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        List<Product> productList = productService.myProducts(username);
        return ResponseHandler.generateResponse("Successful",HttpStatus.OK,productList);
    }

    @PutMapping("/updateproduct")
    public ResponseEntity<Object> updateProduct(@RequestBody Product product){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        product.setUsername(username);
        productService.addProduct(product);
        return ResponseHandler.generateResponse("Successful Update",HttpStatus.OK,product);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
        return ResponseHandler.generateResponse("Successful",HttpStatus.OK,null);
    }
}
