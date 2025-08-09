package com.example.usermanagement.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data // generates getters, setters, toString, equals, hashCode
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int age;
    private String address;
}