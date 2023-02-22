package com.hms.controller;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RestController;

import com.hms.payloads.AddressDto;
import com.hms.payloads.ApiResponse;
import com.hms.services.AddressService;

@RestController
@RequestMapping("/api/address")
public class AddressController {

	@Autowired
	private AddressService addressService;

	// create
	@PostMapping("/")
	public ResponseEntity<AddressDto> createAddress(@Valid @RequestBody AddressDto addressDto) {
		AddressDto createAddress = this.addressService.createAddress(addressDto);
		return new ResponseEntity<AddressDto>(createAddress, HttpStatus.CREATED);
	}

	// update
	@PutMapping("/{Id}")
	public ResponseEntity<AddressDto> updateAddress(@Valid @RequestBody AddressDto addressDto,
			@PathVariable Integer Id) {
		AddressDto updatedAddress = this.addressService.updateAddress(addressDto, Id);
		return new ResponseEntity<AddressDto>(updatedAddress, HttpStatus.OK);
	}

	// delete
	@DeleteMapping("/{Id}")
	public ResponseEntity<ApiResponse> deleteAddress(@PathVariable Integer Id) {
		this.addressService.deleteAddress(Id);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Address is deleted successfully !!", true),
				HttpStatus.OK);
	}

	// get
	@GetMapping("/{Id}")
	public ResponseEntity<AddressDto> getAddress(@PathVariable Integer Id) {
		AddressDto addressDto = this.addressService.getAddress(Id);
		return new ResponseEntity<AddressDto>(addressDto, HttpStatus.OK);
	}
}
