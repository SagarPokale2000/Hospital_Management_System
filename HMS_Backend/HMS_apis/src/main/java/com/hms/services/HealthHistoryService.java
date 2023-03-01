package com.hms.services;

import java.util.List;

import com.hms.payloads.HealthHistoryDto;
import com.hms.payloads.HealthHistoryResponse;

public interface HealthHistoryService {

			//add appointment ( create )
			HealthHistoryDto addAppointment(HealthHistoryDto healthDto,Integer patientId);

			//get all medicine of health history by patient
			List<HealthHistoryDto> getHealthHistoryBypatient(Integer patientId);
			
			// delete
			void deleteHealthHistory(Integer healthId);

			//update 
			HealthHistoryDto updateHealthHistory(HealthHistoryDto healthDto, Integer healthId);
			
			//get all medicine
			HealthHistoryResponse getAllHealthHistory(Integer pageNumber,Integer pageSize,String sortBy,String sortDir);
			
			//get single medicine
			HealthHistoryDto getHealthHistoryById(Integer healthId);
			
			
			//search posts
			List<HealthHistoryDto> searchHealthHistory(String keyword);
}