package com.hms.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.hms.entities.Ward;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.WardDto;
import com.hms.repository.WardRepo;
import com.hms.services.WardService;

@Service
public class WardServiceImpl implements WardService {

	
	@Autowired
	private WardRepo wardRepo;

	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public WardDto createWard(WardDto wardDto) {
		Ward ward = this.modelMapper.map(wardDto, Ward.class);
		Ward addedWard = this.wardRepo.save(ward);
		return this.modelMapper.map(addedWard, WardDto.class);
	}

	@Override
	public WardDto updateWard(WardDto wardDto, Integer wardId) {
		Ward ward = this.wardRepo.findById(wardId)
				.orElseThrow(() -> new ResourceNotFoundException("Ward ", "Ward Id", wardId));

		ward.setWardType(wardDto.getWardType());
		ward.setWardCharges(wardDto.getWardCharges());

		Ward updatedward = this.wardRepo.save(ward);

		return this.modelMapper.map(updatedward, WardDto.class);
	}

	@Override
	public void deleteWard(Integer wardId) {
		Ward ward = this.wardRepo.findById(wardId)
				.orElseThrow(() -> new ResourceNotFoundException("Ward ", "ward id", wardId));
		this.wardRepo.delete(ward);

	}

	@Override
	public WardDto getWard(Integer wardId) {
		Ward ward = this.wardRepo.findById(wardId)
				.orElseThrow(() -> new ResourceNotFoundException("Ward", "ward id", wardId));

		return this.modelMapper.map(ward, WardDto.class);
	}

	@Override
	public List<WardDto> getward() {
		List<Ward> wards = this.wardRepo.findAll();
		List<WardDto> wardDtos = wards.stream().map((ward) -> this.modelMapper.map(ward, WardDto.class))
				.collect(Collectors.toList());

		return wardDtos;
	}

}
