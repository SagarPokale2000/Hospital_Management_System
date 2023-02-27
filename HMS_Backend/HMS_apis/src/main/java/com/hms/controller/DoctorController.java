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
import com.hms.services.DoctorService;

@RestController
@RequestMapping("/api")
public class DoctorController {

	@Autowired
	private DoctorService doctorService;
	
	// create doctor --send user details in json format to create doctor
	//@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/doctor")
	public ResponseEntity<DoctorDto> createDoctorN(@Valid @RequestBody DoctorDto doctorDto) {
		DoctorDto createDoctor = this.doctorService.createDoctorN(doctorDto);
		return new ResponseEntity<DoctorDto>(createDoctor, HttpStatus.CREATED);
	}

	// update - pass json
	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/doctor/{docId}")
	public ResponseEntity<DoctorDto> updateDoctor(@Valid @RequestBody DoctorDto doctorDto,
			@PathVariable Integer docId) {
		DoctorDto updatedDoctor = this.doctorService.updateDoctor(doctorDto, docId);
		return new ResponseEntity<DoctorDto>(updatedDoctor, HttpStatus.OK);
	}

	// get
	@GetMapping("/doctor/{docId}")
	public ResponseEntity<DoctorDto> getDoctor(@PathVariable Integer docId) {
		DoctorDto doctorDto = this.doctorService.getDoctor(docId);
		return new ResponseEntity<DoctorDto>(doctorDto, HttpStatus.OK);
	}

	// get all
	@GetMapping("/doctor")
	public ResponseEntity<List<DoctorDto>> getDoctor() {
		List<DoctorDto> doctor = this.doctorService.getDoctor();
		return ResponseEntity.ok(doctor);
	}
	
	
	// create
	@PostMapping("/employee/{empId}/doctor")
	public ResponseEntity<DoctorDto> createDoctor(@Valid @RequestBody DoctorDto doctorDto,@PathVariable Integer empId) {
		DoctorDto createDoctor = this.doctorService.createDoctor(doctorDto,empId);
		return new ResponseEntity<DoctorDto>(createDoctor, HttpStatus.CREATED);
	}

}
