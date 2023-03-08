package com.hms.services;

import java.util.List;

import com.hms.payloads.PatientDto;
import com.hms.payloads.PatientResponse;

public interface PatientService {
	// create patient ( Sign Up )
	PatientDto createPatient(PatientDto patientDto);

	PatientResponse getAllPatientForReceptionist(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	PatientResponse getAllPatientForAdmitStatus(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	PatientResponse getAllPatientForDischarge(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);
	
	// update patient Doctor
	PatientDto updatePatientDoctor(Integer patientId, Integer doctorId);

	// get all patients for accountant (pagination)
	PatientResponse getAllPatientAfterAppointment(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	// get single patient
	PatientDto getPatientById(Integer patientId);
	
	
	// update patient details
	PatientDto updatePatient(PatientDto patientDto, Integer patientId);

	// update patient Ward
	// PatientDto updatePatientWard(PatientDto patientDto, Integer patientId,
	// Integer wardId);

	// get all patients (pagination)
	PatientResponse getAllPatient(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);


	// get all patients by doctor Id
	List<PatientDto> getPatientsByDoctor(Integer doctorId);

	// get all patients by ward Id
	List<PatientDto> getPatientsByWard(Integer wardId);

	void deletePatient(Integer patientId);

	// search patients
	List<PatientDto> searchPatientById(String keyword);
}