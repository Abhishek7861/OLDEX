package com.abhiSpringBoot.spring.security.postgresql.controllers;

import com.abhiSpringBoot.spring.security.postgresql.EmailService.EmailClient;
import com.abhiSpringBoot.spring.security.postgresql.EmailService.EmailFormat;
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
public class EmailController {

    @Autowired
    EmailClient emailClient;

    @PostMapping("/sendEmail")
    @ResponseStatus(HttpStatus.OK)
    public String sendSimpleEmail(@RequestBody EmailFormat emailFormat)
    {
        System.out.println(emailFormat.toString());
        emailClient.sendSimpleEmail(emailFormat);
        return "SUCCESS";
    }
}
