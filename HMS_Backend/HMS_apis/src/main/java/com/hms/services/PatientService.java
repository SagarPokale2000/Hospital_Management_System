package com.hms.services;

import java.util.List;

import com.hms.payloads.PatientDto;
import com.hms.payloads.PatientResponse;

public interface PatientService {
	// create patient
	//PatientDto createPatientO(PatientDto patientDto, Integer userId);
	
	PatientDto createPatient(PatientDto patientDto);

	// update patient details
	PatientDto updatePatient(PatientDto patientDto, Integer patientId);

	// update patient Doctor
	PatientDto updatePatientDoctor(PatientDto patientDto, Integer patientId, Integer doctorId);

	// update patient Ward
	PatientDto updatePatientWard(PatientDto patientDto, Integer patientId, Integer wardId);

	// get all patients (pagination)
	PatientResponse getAllPatient(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	// get single patient
	PatientDto getPatientById(Integer patientId);

	// get all patients by doctor Id
	List<PatientDto> getPatientsByDoctor(Integer doctorId);

	// get all patients by ward Id
	List<PatientDto> getPatientsByWard(Integer wardId);
	
	void deletePatient(Integer patientId);

	// search patients
	List<PatientDto> searchPatientById(String keyword);
}