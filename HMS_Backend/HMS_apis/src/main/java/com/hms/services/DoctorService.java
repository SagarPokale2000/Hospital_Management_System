package com.hms.services;

import java.util.List;

import com.hms.payloads.DoctorDto;



public interface DoctorService {
	// create
		DoctorDto createDoctor(DoctorDto doctorDto);

		// update
		DoctorDto updateDoctor(DoctorDto doctorDto, Integer doctorId);

		// delete
		void deleteDoctor(Integer doctorId);

		// get
		DoctorDto getDoctor(Integer doctorId);

		// get All

		List<DoctorDto> getDoctors();
}
