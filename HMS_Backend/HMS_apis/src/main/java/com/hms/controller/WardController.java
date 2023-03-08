package com.hms.controller;

import java.util.List;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RestController;

import com.hms.payloads.ApiResponse;
import com.hms.payloads.WardDto;
import com.hms.services.WardService;

@RestController
@RequestMapping("/api/wards")
public class WardController {

	@Autowired
	private WardService wardService;

	// create
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/")
	public ResponseEntity<WardDto> createWard(@Valid @RequestBody WardDto wardDto) {
		WardDto createWard = this.wardService.createWard(wardDto);
		return new ResponseEntity<WardDto>(createWard, HttpStatus.CREATED);
	}

	// ----------------------------------------------------------------------------------------------------------

	// get all
	@PreAuthorize("hasRole('RECEPTIONIST')")
	@GetMapping("/")
	public ResponseEntity<List<WardDto>> getWard() {
		List<WardDto> wards = this.wardService.getward();
		return ResponseEntity.ok(wards);
	}
	
	//--------------------------------------------------------------------------------------------------------------
	
	// update
	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/{wardId}")
	public ResponseEntity<WardDto> updateWard(@Valid @RequestBody WardDto wardDto, @PathVariable Integer wardId) {
		WardDto updatedWard = this.wardService.updateWard(wardDto, wardId);
		return new ResponseEntity<WardDto>(updatedWard, HttpStatus.OK);
	}

	// delete
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/{wardId}")
	public ResponseEntity<ApiResponse> deleteWard(@PathVariable Integer wardId) {
		this.wardService.deleteWard(wardId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("ward is deleted successfully !!", true), HttpStatus.OK);
	}

	// get
	@GetMapping("/{wardId}")
	public ResponseEntity<WardDto> getWard(@PathVariable Integer wardId) {
		WardDto wardDto = this.wardService.getWard(wardId);
		return new ResponseEntity<WardDto>(wardDto, HttpStatus.OK);
	}
}