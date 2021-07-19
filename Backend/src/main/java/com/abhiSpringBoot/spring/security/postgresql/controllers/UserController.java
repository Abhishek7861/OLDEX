package com.abhiSpringBoot.spring.security.postgresql.controllers;

import com.abhiSpringBoot.spring.security.postgresql.Service.UserService;
import com.abhiSpringBoot.spring.security.postgresql.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/test")
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER')")
	public Optional<User> userAccess(@RequestHeader("Authorization") String param) {

		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
				.getPrincipal();
		String username = userDetails.getUsername();
		return userService.getUser(username);
	}

	@PutMapping("/user")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<Object> userUpdate(@RequestHeader("Authorization") String param, @RequestBody User user) {

		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
				.getPrincipal();
		String username = userDetails.getUsername();
		return userService.updateUser(username,user);
	}
}
