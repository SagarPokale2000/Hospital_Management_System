package com.hms.controller;

import java.util.List;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RestController;

import com.hms.payloads.DoctorDto;
import com.hms.payloads.EmployeeDto;
import com.hms.services.DoctorService;

@RestController
@RequestMapping("/api")
public class DoctorController {

	@Autowired
	private DoctorService doctorService;
	
	// create doctor
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/doctor")
	public ResponseEntity<DoctorDto> createDoctorN(@Valid @RequestBody EmployeeDto empDto) {
		DoctorDto createDoctor = this.doctorService.createDoctorN(empDto);
		return new ResponseEntity<DoctorDto>(createDoctor, HttpStatus.CREATED);
	}
	
	//--------------------------------------------------------------------------
	
	// update - pass json
	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/doctor/{docId}")
	public ResponseEntity<DoctorDto> updateDoctor(@Valid @RequestBody DoctorDto doctorDto,
			@PathVariable Integer docId) {
		DoctorDto updatedDoctor = this.doctorService.updateDoctor(doctorDto, docId);
		return new ResponseEntity<DoctorDto>(updatedDoctor, HttpStatus.OK);
	}
	
	@PreAuthorize("hasRole('DOCTOR')")
	@PutMapping("/doctor/{docId}/schedule/{days}")
	public ResponseEntity<DoctorDto> selectSchedule(@Valid @RequestBody DoctorDto doctorDto,
			@PathVariable Integer docId, @PathVariable String days) {
		
		DoctorDto updatedDoctor = this.doctorService.selectSchedule(doctorDto, docId,days);
		return new ResponseEntity<DoctorDto>(updatedDoctor, HttpStatus.OK);
	}
	/*
	// delete
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/doctor/{Id}")
	public ResponseEntity<ApiResponse> deleteEmployee(@PathVariable Integer Id) {
		this.doctorService.deleteDoctor(Id);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Doctor is deleted successfully !!", true), HttpStatus.OK);
*/
	// get all
	@PreAuthorize("hasRole('RECEPTIONIST')")
	@GetMapping("/doctors")
	public ResponseEntity<List<DoctorDto>> getDoctor() {
		List<DoctorDto> doctor = this.doctorService.getDoctor();
		return ResponseEntity.ok(doctor);
	}
}
