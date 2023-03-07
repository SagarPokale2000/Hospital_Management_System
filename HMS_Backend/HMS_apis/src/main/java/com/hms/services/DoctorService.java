package com.hms.services;

import java.util.List;

import com.hms.payloads.DoctorDto;
import com.hms.payloads.EmployeeDto;



public interface DoctorService {

		DoctorDto createDoctorN(EmployeeDto empDto);
		// update
		DoctorDto updateDoctor(DoctorDto doctorDto, Integer doctorId);
		
		DoctorDto selectSchedule(DoctorDto doctorDto, Integer doctorId,String days);
		// delete
//		void deleteDoctor(Integer Id);
		
		// get
		DoctorDto getDoctor(Integer doctorId);

		// get All
		List<DoctorDto> getDoctor();
}