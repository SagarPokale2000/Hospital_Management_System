package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/api/patients/")
public class PatientController {

	@Autowired
	private PatientService patientService;
//	create

	@PostMapping("/doctor/{doctorId}/ward/{wardId}/patient")
	public ResponseEntity<PatientDto> createPatient(@RequestBody PatientDto patientDto, @PathVariable Integer doctorId,
			@PathVariable Integer wardId) {
		PatientDto createPatient = this.patientService.createPatient(patientDto, doctorId, wardId);
		return new ResponseEntity<PatientDto>(createPatient, HttpStatus.CREATED);
	}
	
	
	// get by user

		@GetMapping("/doctor/{doctorId}/patient")
		public ResponseEntity<List<PatientDto>> getPatientsByDoctor(@PathVariable Integer doctorId) {

			List<PatientDto> patients = this.patientService.getPatientsByDoctor(doctorId);
			return new ResponseEntity<List<PatientDto>>(patients, HttpStatus.OK);

		}
		
		
		
		

		@GetMapping("/ward/{wardId}/patients")
		public ResponseEntity<List<PatientDto>> getPatientsByWard(@PathVariable Integer wardId) {

			List<PatientDto> patients = this.patientService.getPatientsByWard(wardId);
			return new ResponseEntity<List<PatientDto>>(patients, HttpStatus.OK);

		}
		
		

		@GetMapping("/posts")
		public ResponseEntity<PatientResponse> getAllPatient(
				@RequestParam(value = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
				@RequestParam(value = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
				@RequestParam(value = "sortBy", defaultValue = AppConstants.SORT_BY, required = false) String sortBy,
				@RequestParam(value = "sortDir", defaultValue = AppConstants.SORT_DIR, required = false) String sortDir) {

			PatientResponse patientResponse = this.patientService.getAllPatient(pageNumber, pageSize, sortBy, sortDir);
			return new ResponseEntity<PatientResponse>(patientResponse, HttpStatus.OK);
		}
		
		@GetMapping("/patients/{patientId}")
		public ResponseEntity<PatientDto> getPatientsById(@PathVariable Integer patientId) {

			PatientDto patientDto = this.patientService.getPatientById(patientId);
			return new ResponseEntity<PatientDto>(patientDto, HttpStatus.OK);

		}
		
		@DeleteMapping("/patients/{patientId}")
		public ApiResponse deletePost(@PathVariable Integer patientId) {
			this.patientService.deletePatient(patientId);
			return new ApiResponse("Post is successfully deleted !!", true);
		}

		
		@PutMapping("/patients/{patientId}")
		public ResponseEntity<PatientDto> updatePatient(@RequestBody PatientDto patientDto, @PathVariable Integer patientId) {

			PatientDto updatePatient = this.patientService.updatePatient(patientDto, patientId);
			return new ResponseEntity<PatientDto>(updatePatient, HttpStatus.OK);

		}

		// search
		@GetMapping("/patients/search/{keywords}")
		public ResponseEntity<List<PatientDto>> searchPatientById(@PathVariable("keywords") String keywords) {
			List<PatientDto> result = this.patientService.searchPatientById(keywords);
			return new ResponseEntity<List<PatientDto>>(result, HttpStatus.OK);
		}

}
