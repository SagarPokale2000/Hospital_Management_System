package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hms.payloads.HealthHistoryDto;
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

	//get All health history by patient
	@PreAuthorize("hasRole('PATIENT')")
	@GetMapping("/patient/{patientId}/healthhistory")
	public @ResponseBody ResponseEntity<List<HealthHistoryDto>> getHealthHistoryBypatient(@PathVariable Integer patientId) {
		List<HealthHistoryDto> healths = this.healthservice.getHealthHistoryBypatient(patientId);
		return new ResponseEntity<List<HealthHistoryDto>>(healths, HttpStatus.OK);
	}
	
	//get single active health history
	@PreAuthorize("hasAnyRole('ACCOUNTANT','RECEPTIONIST')")
	@GetMapping("/patient/{patientId}/healthhistory/paymentstatus")
	public @ResponseBody ResponseEntity<HealthHistoryDto> getHealthHistoryByPaymentStatus(@PathVariable Integer patientId) {
		HealthHistoryDto healths = this.healthservice.getHealthHistoryByPaymentStatus(patientId);
		return new ResponseEntity<HealthHistoryDto>(healths, HttpStatus.OK);
	}
	
	//get Appointment history by patient
		@PreAuthorize("hasRole('PATIENT')")
		@GetMapping("/patient/{patientId}/appointmenthistory")
		public @ResponseBody ResponseEntity<List<HealthHistoryDto>> getAppointmentHistoryBypatient(@PathVariable Integer patientId) {
			List<HealthHistoryDto> healths = this.healthservice.getAppointmentHistoryBypatient(patientId);
			return new ResponseEntity<List<HealthHistoryDto>>(healths, HttpStatus.OK);
		}
	
	// allocate ward and bed (admit patient)
		@PreAuthorize("hasRole('RECEPTIONIST')")
		@PutMapping("/healthhistory/ward/{wardId}")
		public ResponseEntity<HealthHistoryDto> updatePatientWard(@RequestBody HealthHistoryDto healthHistoryDto, @PathVariable Integer wardId) {
			HealthHistoryDto updatePatient = this.healthservice.updatePatientWard(healthHistoryDto, wardId);
			return new ResponseEntity<HealthHistoryDto>(updatePatient, HttpStatus.OK);
		}
		
		@PreAuthorize("hasRole('RECEPTIONIST')")
		@PutMapping("/healthhistory/{Id}/discharge")
		public ResponseEntity<HealthHistoryDto> dischargePatient(@PathVariable Integer Id) {
			HealthHistoryDto updatePatient = this.healthservice.dischargePatient(Id);
			return new ResponseEntity<HealthHistoryDto>(updatePatient, HttpStatus.OK);
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
