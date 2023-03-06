package com.hms.services;

import java.util.List;

import com.hms.payloads.HealthHistoryDto;
import com.hms.payloads.HealthHistoryResponse;

public interface HealthHistoryService {

			//add appointment ( create )
			HealthHistoryDto addAppointment(HealthHistoryDto healthDto,Integer patientId);

			//get all medicine of health history by patient
			List<HealthHistoryDto> getHealthHistoryBypatient(Integer patientId);
			
			List<HealthHistoryDto> getAppointmentHistoryBypatient(Integer patientId);
			
			HealthHistoryDto updatePatientWard(HealthHistoryDto healthDto,Integer healthId,Integer wardId);
			
			// delete
			void deleteHealthHistory(Integer healthId);

			//update 
			HealthHistoryDto updateHealthHistory(HealthHistoryDto healthDto, Integer healthId);
			
			HealthHistoryDto updateHealthHistoryPayment(Integer Id,Double amt);
			
			//get all medicine
			HealthHistoryResponse getAllHealthHistory(Integer pageNumber,Integer pageSize,String sortBy,String sortDir);
			
			//get single medicine
			HealthHistoryDto getHealthHistoryById(Integer healthId);
			
			HealthHistoryDto getHealthHistoryByAccountant(Integer patientId);
			
			//search posts
			List<HealthHistoryDto> searchHealthHistory(String keyword);
}