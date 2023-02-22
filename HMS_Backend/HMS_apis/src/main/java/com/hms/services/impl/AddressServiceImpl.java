package com.hms.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.entities.Address;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.AddressDto;
import com.hms.repository.AddressRepo;
import com.hms.services.AddressService;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressRepo addressRepo;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public AddressDto createAddress(AddressDto addressDto) {
		Address address = this.modelMapper.map(addressDto, Address.class);
		Address addedAddress = this.addressRepo.save(address);
		return this.modelMapper.map(addedAddress, AddressDto.class);
	}

	@Override
	public AddressDto updateAddress(AddressDto addressDto, Integer Id) {
		Address address = this.addressRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Address ", "address Id", Id));

		address.setPlotNo(addressDto.getPlotNo());
		address.setBuildingName(addressDto.getBuildingName());
		address.setAreaName(addressDto.getAreaName());
		address.setCity(addressDto.getCity());
		address.setState(addressDto.getState());
		address.setCountry(addressDto.getCountry());
		address.setPincode(addressDto.getPincode());

		Address updatedAddress = this.addressRepo.save(address);
		return this.modelMapper.map(updatedAddress, AddressDto.class);
	}

	@Override
	public void deleteAddress(Integer Id) {
		Address address = this.addressRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Address ", "address id", Id));
		this.addressRepo.delete(address);
	}

	@Override
	public AddressDto getAddress(Integer Id) {
		Address address = this.addressRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Address", "address id", Id));
		return this.modelMapper.map(address, AddressDto.class);
	}
}