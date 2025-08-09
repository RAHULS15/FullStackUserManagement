package com.example.usermanagement.repository;


import com.example.usermanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNameContainingIgnoreCaseAndAgeAndAddressContainingIgnoreCase(String name, int age, String address);
}