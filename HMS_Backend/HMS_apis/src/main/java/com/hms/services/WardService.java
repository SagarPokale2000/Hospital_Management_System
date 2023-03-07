package com.hms.services;

import java.util.List;

import com.hms.payloads.WardDto;



public interface WardService {
		// create
		WardDto createWard(WardDto wardDto);

		// update
		WardDto updateWard(WardDto wardDto, Integer wardId);

		// delete
		void deleteWard(Integer wardId);

		// get
		WardDto getWard(Integer wardId);

		// get All
		List<WardDto> getward();
}
