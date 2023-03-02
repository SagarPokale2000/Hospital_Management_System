package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.config.AppConstants;
import com.hms.payloads.ApiResponse;
import com.hms.payloads.PatientDto;
import com.hms.payloads.PatientResponse;
import com.hms.services.PatientService;

@RestController
@RequestMapping("/api")
public class PatientController {

	@Autowired
	private PatientService patientService;

	// update patient details
	@PreAuthorize("hasRole('PATIENT')")
	@PutMapping("/patients/{patientId}")
	public ResponseEntity<PatientDto> updatePatient(@RequestBody PatientDto patientDto,
			@PathVariable Integer patientId) {
		PatientDto updatePatient = this.patientService.updatePatient(patientDto, patientId);
		return new ResponseEntity<PatientDto>(updatePatient, HttpStatus.OK);
	}

	// appoint doctor to patient
	@PreAuthorize("hasRole('RECEPTIONIST')")
	@PutMapping("/patients/{patientId}/doctor/{doctorId}")
	public ResponseEntity<PatientDto> updatePatientDoctor(@RequestBody PatientDto patientDto,
			@PathVariable Integer patientId, @PathVariable Integer doctorId) {
		PatientDto updatePatient = this.patientService.updatePatientDoctor(patientDto, patientId, doctorId);
		return new ResponseEntity<PatientDto>(updatePatient, HttpStatus.OK);
	}

	// get patients by doctor ( Appointment list )
	@GetMapping("/doctor/{doctorId}/patients")
	public ResponseEntity<List<PatientDto>> getPatientsByDoctor(@PathVariable Integer doctorId) {
		List<PatientDto> patients = this.patientService.getPatientsByDoctor(doctorId);
		return new ResponseEntity<List<PatientDto>>(patients, HttpStatus.OK);
	}
	
	// get patients by Id
	@GetMapping("/patients/{patientId}")
	public ResponseEntity<PatientDto> getPatientsById(@PathVariable Integer patientId) {
		PatientDto patientDto = this.patientService.getPatientById(patientId);
		return new ResponseEntity<PatientDto>(patientDto, HttpStatus.OK);
	}

	// get patients by ward
	@GetMapping("/ward/{wardId}/patients")
	public ResponseEntity<List<PatientDto>> getPatientsByWard(@PathVariable Integer wardId) {
		List<PatientDto> patients = this.patientService.getPatientsByWard(wardId);
		return new ResponseEntity<List<PatientDto>>(patients, HttpStatus.OK);
	}

	// get all patients
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/patients")
	public ResponseEntity<PatientResponse> getAllPatient(
			@RequestParam(value = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
			@RequestParam(value = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
			@RequestParam(value = "sortBy", defaultValue = AppConstants.SORT_BY, required = false) String sortBy,
			@RequestParam(value = "sortDir", defaultValue = AppConstants.SORT_DIR, required = false) String sortDir) {

		PatientResponse patientResponse = this.patientService.getAllPatient(pageNumber, pageSize, sortBy, sortDir);
		return new ResponseEntity<PatientResponse>(patientResponse, HttpStatus.OK);
	}

	// delete patient
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/patients/{patientId}")
	public ResponseEntity<ApiResponse> deletePatient(@PathVariable Integer patientId) {
		this.patientService.deletePatient(patientId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Patient is deleted successfully !!", true),
				HttpStatus.OK);
	}

	// search
	@GetMapping("/patients/search/{keywords}")
	public ResponseEntity<List<PatientDto>> searchPatientById(@PathVariable("keywords") String keywords) {
		List<PatientDto> result = this.patientService.searchPatientById(keywords);
		return new ResponseEntity<List<PatientDto>>(result, HttpStatus.OK);
	}
	
	/*
	// create patient
	@PostMapping("/user/{userId}/patients")
	public ResponseEntity<PatientDto> createPatientO(@RequestBody PatientDto patientDto, @PathVariable Integer userId) {
		PatientDto createPatient = this.patientService.createPatient(patientDto, userId);
		return new ResponseEntity<PatientDto>(createPatient, HttpStatus.CREATED);
	}
*/
}