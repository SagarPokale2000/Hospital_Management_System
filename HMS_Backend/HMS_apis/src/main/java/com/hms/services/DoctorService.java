package com.hms.services;

import java.util.List;

import com.hms.payloads.DoctorDto;
import com.hms.payloads.EmployeeDto;



public interface DoctorService {
	// create
		DoctorDto createDoctor(DoctorDto doctorDto,Integer empId);
		
//		DoctorDto createDoctorN(DoctorDto doctorDto);

		DoctorDto createDoctorN(EmployeeDto empDto);
		// update
		DoctorDto updateDoctor(DoctorDto doctorDto, Integer doctorId);

		// get
		DoctorDto getDoctor(Integer doctorId);

		// get All
		List<DoctorDto> getDoctor();
}