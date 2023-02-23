package com.hms.services;

import java.util.List;

import com.hms.payloads.PatientDto;
import com.hms.payloads.PatientResponse;

public interface PatientService {
	// create patient
	PatientDto createPatient(PatientDto patientDto,Integer userId, Integer doctorId, Integer wardId);

	// update patient
	PatientDto updatePatient(PatientDto patientDto, Integer patientId);
	
	// get all patients
	PatientResponse getAllPatient(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	// get single patient
	PatientDto getPatientById(Integer patientId);

	// get all patients by doctor Id
	List<PatientDto> getPatientsByDoctor(Integer doctorId);

	// get all patients by ward Id
	List<PatientDto> getPatientsByWard(Integer wardId);

	// search patients
	List<PatientDto> searchPatientById(String keyword);
}