package com.hms.services;

import java.util.List;

import com.hms.payloads.HealthHistoryDto;
import com.hms.payloads.HealthHistoryResponse;

public interface HealthHistoryService {

			//add appointment ( create )
			HealthHistoryDto addAppointment(HealthHistoryDto healthDto,Integer patientId);
			
			// get Appointment History
			List<HealthHistoryDto> getAppointmentHistoryBypatient(Integer patientId);

			//get health history by patient
			List<HealthHistoryDto> getHealthHistoryBypatient(Integer patientId);

			// delete( cancel health history )
			void deleteHealthHistory(Integer healthId);

			//get single medicine
			HealthHistoryDto getHealthHistoryById(Integer healthId);
			
			//allocate ward and bed
			HealthHistoryDto updatePatientWard(HealthHistoryDto healthDto,Integer wardId);

			//Discharge Patient
			HealthHistoryDto dischargePatient(Integer healthId);

			// update payment by accountant
			HealthHistoryDto updateHealthHistoryPayment(Integer Id,Double amt);
			
			
			//update 
			HealthHistoryDto updateHealthHistory(HealthHistoryDto healthDto, Integer healthId);
			
			
			//get all medicine
			HealthHistoryResponse getAllHealthHistory(Integer pageNumber,Integer pageSize,String sortBy,String sortDir);
			
			
			HealthHistoryDto getHealthHistoryByPaymentStatus(Integer patientId);
			
			//search posts
			List<HealthHistoryDto> searchHealthHistory(String keyword);
}