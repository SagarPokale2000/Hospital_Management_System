//package com.hms.controller;
////updated
//import javax.validation.Valid;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.hms.payloads.AddressDto;
//import com.hms.services.AddressService;
//
//@RestController
//@RequestMapping("/api")
//public class AddressController {
//
//	@Autowired
//	private AddressService addressService;
//
//	// create address by user id
//	@PostMapping("/user/{userId}/address")
//	public ResponseEntity<AddressDto> createAddress(@Valid @RequestBody AddressDto addressDto,
//			@PathVariable Integer userId) {
//		AddressDto createAddress = this.addressService.createAddress(addressDto, userId);
//		return new ResponseEntity<AddressDto>(createAddress, HttpStatus.CREATED);
//	}
//
//	// update address by user id
//	@PutMapping("/address/{Id}")
//	public ResponseEntity<AddressDto> updateAddress(@Valid @RequestBody AddressDto addressDto,
//			@PathVariable Integer Id) {
//		AddressDto updatedAddress = this.addressService.updateAddress(addressDto, Id);
//		return new ResponseEntity<AddressDto>(updatedAddress, HttpStatus.OK);
//	}
//
//	// get address by user id
//	@GetMapping("/address/{Id}")
//	public ResponseEntity<AddressDto> getAddress(@PathVariable Integer Id) {
//		AddressDto addressDto = this.addressService.getAddress(Id);
//		return new ResponseEntity<AddressDto>(addressDto, HttpStatus.OK);
//	}
//}