package com.hms.services;

import java.util.List;

import com.hms.payloads.MedicineDto;
import com.hms.payloads.MedicineResponse;



public interface MedicineService {

		//create 
		MedicineDto createMedicine(MedicineDto medicineDto,Integer healthId);

		
		//get all medicine
		MedicineResponse getAllMedicine(Integer pageNumber,Integer pageSize,String sortBy,String sortDir);
		
		//get single medicine
		MedicineDto getMedicineById(Integer medicineId);
		
		//get all medicine ofhealth history
		List<MedicineDto> getMedicineByHealthHistory(Integer healthId);
}