package com.hms.services;

import java.util.List;

import com.hms.payloads.DoctorDto;



public interface DoctorService {
	// create
		DoctorDto createDoctor(DoctorDto doctorDto,Integer empId);

		// update
		DoctorDto updateDoctor(DoctorDto doctorDto, Integer doctorId);

		// get
		DoctorDto getDoctor(Integer doctorId);

		// get All
		List<DoctorDto> getDoctor();
}