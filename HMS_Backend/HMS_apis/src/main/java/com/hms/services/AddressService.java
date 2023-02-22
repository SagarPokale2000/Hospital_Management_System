package com.hms.services;

import com.hms.payloads.AddressDto;

public interface AddressService {
	// create
	AddressDto createAddress(AddressDto addressDto);

	// update
	AddressDto updateAddress(AddressDto addressDto, Integer Id);

	// delete
	void deleteAddress(Integer Id);

	// get
	AddressDto getAddress(Integer Id);
}