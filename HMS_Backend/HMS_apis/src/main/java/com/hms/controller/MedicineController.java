package com.hms.controller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.config.AppConstants;
import com.hms.payloads.ApiResponse;
import com.hms.payloads.MedicineDto;
import com.hms.payloads.MedicineResponse;
import com.hms.services.MedicineService;

@RestController
@RequestMapping("/api")
public class MedicineController {

	@Autowired
	private MedicineService medicineService;

	// create
	@PostMapping("/healthhistory/{healthId}/medicine")
	public ResponseEntity<MedicineDto> createMedicine(@RequestBody MedicineDto medicineDto,
			@PathVariable Integer healthId) {
		MedicineDto createMedicine = this.medicineService.createMedicine(medicineDto, healthId);
		return new ResponseEntity<MedicineDto>(createMedicine, HttpStatus.CREATED);
	}

	// get medicine by health history
	@GetMapping("/healthhistory/{healthId}/medicine")
	public ResponseEntity<List<MedicineDto>> getMedicineByHealthHistory(@PathVariable Integer healthId) {
		List<MedicineDto> medicine = this.medicineService.getMedicineByHealthHistory(healthId);
		return new ResponseEntity<List<MedicineDto>>(medicine, HttpStatus.OK);
	}

	@GetMapping("/medicine")
	public ResponseEntity<MedicineResponse> getAllMedicine(
			@RequestParam(value = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
			@RequestParam(value = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
			@RequestParam(value = "sortBy", defaultValue = AppConstants.SORT_BY, required = false) String sortBy,
			@RequestParam(value = "sortDir", defaultValue = AppConstants.SORT_DIR, required = false) String sortDir) {

		MedicineResponse medicineResponse = this.medicineService.getAllMedicine(pageNumber, pageSize, sortBy, sortDir);
		return new ResponseEntity<MedicineResponse>(medicineResponse, HttpStatus.OK);
	}

	@GetMapping("/medicine/{medicineId}")
	public ResponseEntity<MedicineDto> getMedicineById(@PathVariable Integer medicineId) {

		MedicineDto medicineDto = this.medicineService.getMedicineById(medicineId);
		return new ResponseEntity<MedicineDto>(medicineDto, HttpStatus.OK);

	}

	@DeleteMapping("/medicine/{medicineId}")
	public ApiResponse deleteMedicine(@PathVariable Integer medicineId) {
		this.medicineService.deleteMedicine(medicineId);
		return new ApiResponse("medicine is successfully deleted !!", true);
	}

	@PutMapping("/medicine/{medicineId}")
	public ResponseEntity<MedicineDto> updateMedicine(@RequestBody MedicineDto medicineDto,
			@PathVariable Integer medicineId) {

		MedicineDto updateMedicine = this.medicineService.updateMedicine(medicineDto, medicineId);
		return new ResponseEntity<MedicineDto>(updateMedicine, HttpStatus.OK);

	}

	// search
	@GetMapping("/healthhistory/search/{keywords}")
	public ResponseEntity<List<MedicineDto>> searchMedicine(@PathVariable("keywords") String keywords) {
		List<MedicineDto> result = this.medicineService.searchMedicine(keywords);
		return new ResponseEntity<List<MedicineDto>>(result, HttpStatus.OK);
	}
}
