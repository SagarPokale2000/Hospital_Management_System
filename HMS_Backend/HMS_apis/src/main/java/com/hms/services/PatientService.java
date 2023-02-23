package com.hms.services;

import java.util.List;

import com.hms.payloads.PatientDto;
import com.hms.payloads.PatientResponse;

public interface PatientService {
	// create
	PatientDto createPatient(PatientDto patientDto, Integer doctorId, Integer wardId, Integer userId);

	// update
	PatientDto updatePatient(PatientDto patientDto, Integer patientId);

	// delete
	void deletePatient(Integer patientId);

	// get all posts
	PatientResponse getAllPatient(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	// get single patient
	PatientDto getPatientById(Integer patientId);

	// get all patients by doctors
	List<PatientDto> getPatientsByDoctor(Integer doctorId);

	// get all patients by ward
	List<PatientDto> getPatientsByWard(Integer wardId);

	// search patients
	List<PatientDto> searchPatientById(String keyword);
}