package com.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hms.entities.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	
}