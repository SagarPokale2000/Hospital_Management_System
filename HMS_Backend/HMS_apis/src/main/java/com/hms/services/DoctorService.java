package com.hms.services;

import java.util.List;

import com.hms.payloads.DoctorDto;
import com.hms.payloads.EmployeeDto;



public interface DoctorService {
		//create doctor
		DoctorDto createDoctorN(EmployeeDto empDto);

		// get All
		List<DoctorDto> getDoctor();
		
		// update
		DoctorDto updateDoctor(DoctorDto doctorDto, Integer doctorId);
		
		DoctorDto selectSchedule(DoctorDto doctorDto, Integer doctorId,String days);
		
		// get
		DoctorDto getDoctor(Integer doctorId);
}