package com.hms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hms.entities.Health_History;

public interface HealthHistoryRepo extends JpaRepository<Health_History, Integer>{
	//List<Health_History> findByPatient(Patient patient);
	/*
	@Query("select h from HealthHistory h where h.healthId like :key")
	List<Health_History> searchByHealthId(@Param("key") String healthId);*/
}
