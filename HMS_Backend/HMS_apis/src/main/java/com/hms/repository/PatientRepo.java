package com.hms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hms.entities.Doctor;
import com.hms.entities.Patient;

import com.hms.entities.Ward;

public interface PatientRepo extends JpaRepository<Patient, Integer> {
	List<Patient> findByDoctor(Doctor doctor);
	List<Patient> findByWard(Ward ward);

	@Query("select p from Patient p where p.patientId like :key")
	List<Patient> searchByPatientId(@Param("key") String patientId);
}
