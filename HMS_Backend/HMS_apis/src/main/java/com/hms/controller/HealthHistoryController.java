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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hms.config.AppConstants;
import com.hms.payloads.ApiResponse;
import com.hms.payloads.HealthHistoryDto;
import com.hms.payloads.HealthHistoryResponse;
import com.hms.services.HealthHistoryService;

@RestController
@RequestMapping("/api")
public class HealthHistoryController {

	@Autowired
	private HealthHistoryService healthservice;	

	// add appointment ( create health history )
	@PreAuthorize("hasRole('PATIENT')")
	@PostMapping("/patients/{patientId}/healthHistory")
	public ResponseEntity<HealthHistoryDto> addAppointment(@RequestBody HealthHistoryDto healthHistoryDto,
			@PathVariable Integer patientId) {

		HealthHistoryDto appointment = this.healthservice.addAppointment(healthHistoryDto, patientId);
		return new ResponseEntity<HealthHistoryDto>(appointment, HttpStatus.OK);
	}

	//get health history by patient
	@PreAuthorize("hasRole('PATIENT')")
	@GetMapping("/patient/{patientId}/healthhistory")
	public @ResponseBody ResponseEntity<List<HealthHistoryDto>> getHealthHistoryBypatient(@PathVariable Integer patientId) {
		List<HealthHistoryDto> healths = this.healthservice.getHealthHistoryBypatient(patientId);
		return new ResponseEntity<List<HealthHistoryDto>>(healths, HttpStatus.OK);
	}
	
	@PreAuthorize("hasRole('ACCOUNTANT')")
	@GetMapping("/patient/{patientId}/healthhistory/accountant")
	public @ResponseBody ResponseEntity<HealthHistoryDto> getHealthHistoryByAccountant(@PathVariable Integer patientId) {
		HealthHistoryDto healths = this.healthservice.getHealthHistoryByAccountant(patientId);
		return new ResponseEntity<HealthHistoryDto>(healths, HttpStatus.OK);
	}
	
	//get Appointment history by patient
		@PreAuthorize("hasRole('PATIENT')")
		@GetMapping("/patient/{patientId}/appointmenthistory")
		public @ResponseBody ResponseEntity<List<HealthHistoryDto>> getAppointmentHistoryBypatient(@PathVariable Integer patientId) {
			List<HealthHistoryDto> healths = this.healthservice.getAppointmentHistoryBypatient(patientId);
			return new ResponseEntity<List<HealthHistoryDto>>(healths, HttpStatus.OK);
		}
	
	// allocate ward and bed
		@PreAuthorize("hasRole('RECEPTIONIST')")
		@PutMapping("/healthhistory/{healthId}/ward/{wardId}")
		public ResponseEntity<HealthHistoryDto> updatePatientWard(@RequestBody HealthHistoryDto healthHistoryDto,
				@PathVariable Integer healthId, @PathVariable Integer wardId) {
			HealthHistoryDto updatePatient = this.healthservice.updatePatientWard(healthHistoryDto,healthId, wardId);
			return new ResponseEntity<HealthHistoryDto>(updatePatient, HttpStatus.OK);
		}
		
	@GetMapping("/healthhistory/{Id}")
	public ResponseEntity<HealthHistoryDto> getHealthHistoryById(@PathVariable Integer Id) {

		HealthHistoryDto healthDto = this.healthservice.getHealthHistoryById(Id);
		return new ResponseEntity<HealthHistoryDto>(healthDto, HttpStatus.OK);

	}

	// get all health history ( pagination )
	@PreAuthorize("hasRole('PATIENT')")
	@GetMapping("/healthhistory")
	public ResponseEntity<HealthHistoryResponse> getAllHealthHistory(
			@RequestParam(value = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
			@RequestParam(value = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
			@RequestParam(value = "sortBy", defaultValue = AppConstants.SORT_BY, required = false) String sortBy,
			@RequestParam(value = "sortDir", defaultValue = AppConstants.SORT_DIR, required = false) String sortDir) {

		HealthHistoryResponse healthResponse = this.healthservice.getAllHealthHistory(pageNumber, pageSize, sortBy,
				sortDir);
		return new ResponseEntity<HealthHistoryResponse>(healthResponse, HttpStatus.OK);
	}

	// delete history
	@DeleteMapping("/healthhistory/{Id}")
	public ApiResponse deleteHealthHistory(@PathVariable Integer Id) {
		this.healthservice.deleteHealthHistory(Id);
		return new ApiResponse("health history is successfully deleted !!", true);
	}

	@PreAuthorize("hasRole('DOCTOR')")
	@PutMapping("/healthhistory/{Id}")
	public ResponseEntity<HealthHistoryDto> updateHealthHistory(@RequestBody HealthHistoryDto healthDto,
			@PathVariable Integer Id) {

		HealthHistoryDto updateHealthHistory = this.healthservice.updateHealthHistory(healthDto, Id);
		return new ResponseEntity<HealthHistoryDto>(updateHealthHistory, HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ACCOUNTANT')")
	@PutMapping("/healthhistory/{Id}/amount/{amt}")
	public ResponseEntity<HealthHistoryDto> updatePayment(@PathVariable Integer Id,
			@PathVariable Double amt) {
		HealthHistoryDto updateHealthHistory = this.healthservice.updateHealthHistoryPayment(Id,amt);
		return new ResponseEntity<HealthHistoryDto>(updateHealthHistory, HttpStatus.OK);
	}
	
	// search
	@GetMapping("/posts/search/{keywords}")
	public ResponseEntity<List<HealthHistoryDto>> searchHealthHistory(@PathVariable("keywords") String keywords) {
		List<HealthHistoryDto> result = this.healthservice.searchHealthHistory(keywords);
		return new ResponseEntity<List<HealthHistoryDto>>(result, HttpStatus.OK);
	}
}
