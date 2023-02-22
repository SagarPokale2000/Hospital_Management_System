package com.hms.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.payloads.ApiResponse;
import com.hms.payloads.DoctorDto;
import com.hms.services.DoctorService;

@RestController
@RequestMapping("/api/doctors")

public class DoctorController {
	
	@Autowired
	private DoctorService doctorService;
	
	
	// create

		@PostMapping("/")
		public ResponseEntity<DoctorDto> createDoctor(@Valid @RequestBody DoctorDto doctorDto) {
			DoctorDto createDoctor = this.doctorService.createDoctor(doctorDto);
			return new ResponseEntity<DoctorDto>(createDoctor, HttpStatus.CREATED);
		}
		
		
		// update

		@PutMapping("/{docId}")
		public ResponseEntity<DoctorDto> updateDoctor(@Valid @RequestBody DoctorDto doctorDto,
				@PathVariable Integer docId) {
			DoctorDto updatedDoctor = this.doctorService.updateDoctor(doctorDto, docId);
			return new ResponseEntity<DoctorDto>(updatedDoctor, HttpStatus.OK);
		}
		
		// delete

		@DeleteMapping("/{docId}")
		public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Integer docId) {
			this.doctorService.deleteDoctor(docId);
			return new ResponseEntity<ApiResponse>(new ApiResponse("doctor is deleted successfully !!", true),
					HttpStatus.OK);
		}
}
