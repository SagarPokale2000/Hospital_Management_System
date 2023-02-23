package com.hms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hms.entities.Health_History;
import com.hms.entities.Medicine;

public interface MedicineRepo extends JpaRepository<Medicine, Integer>{
	
	List<Medicine> findByHealthHistory(Health_History health);
	
	@Query("select m from Medicine m where m.medicineId like :key")
	List<Medicine> searchByMedicineId(@Param("key") String medicineId);
}
