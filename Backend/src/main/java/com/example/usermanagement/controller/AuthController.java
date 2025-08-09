package com.example.usermanagement.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*") // Allow all origins (Postman + frontend)
public class AuthController {

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        Map<String, String> response = new HashMap<>();

        if ("admin".equals(username) && "admin123".equals(password)) {
            response.put("status", "success");
            response.put("message", "Login successful");
        } else {
            response.put("status", "error");
            response.put("message", "Invalid credentials");
        }

        return response;
    }
}