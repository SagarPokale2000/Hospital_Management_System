package com.hms.services;

import java.util.List;

import com.hms.payloads.DoctorDto;



public interface DoctorService {
	// create
		//DoctorDto createDoctorO(DoctorDto doctorDto,Integer empId);
		
		DoctorDto createDoctor(DoctorDto doctorDto);

		// update
		DoctorDto updateDoctor(DoctorDto doctorDto, Integer doctorId);

		// delete
		void deleteDoctor(Integer Id);
		
		// get
		DoctorDto getDoctor(Integer doctorId);

		// get All
		List<DoctorDto> getDoctor();
}