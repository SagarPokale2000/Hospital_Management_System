package com.hms.services;

import java.util.List;

import com.hms.payloads.HealthHistoryDto;
import com.hms.payloads.HealthHistoryResponse;

public interface HealthHistoryService {

			//update 
			HealthHistoryDto updateHealthHistory(HealthHistoryDto healthDto, Integer healthId);
			
			//add appointment ( create )
			HealthHistoryDto addAppointment(HealthHistoryDto healthDto,Integer patientId);

			// delete
			void deleteHealthHistory(Integer healthId);
			
			//get all medicine
			HealthHistoryResponse getAllHealthHistory(Integer pageNumber,Integer pageSize,String sortBy,String sortDir);
			
			//get single medicine
			HealthHistoryDto getHealthHistoryById(Integer healthId);
			
			//get all medicine of health history
			List<HealthHistoryDto> getHealthHistoryBypatient(Integer patientId);
			
			//search posts
			List<HealthHistoryDto> searchHealthHistory(String keyword);
}