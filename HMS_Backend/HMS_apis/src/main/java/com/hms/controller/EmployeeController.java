package com.hms.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.config.AppConstants;
import com.hms.payloads.ApiResponse;
import com.hms.payloads.EmployeeDto;
import com.hms.payloads.EmployeeResponse;
import com.hms.services.EmployeeService;

@RestController
@RequestMapping("/api")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;
	
	// create admin --send user details in json format to create admin
	@PostMapping("/employee/admin")
	public ResponseEntity<EmployeeDto> createAdmin(@Valid @RequestBody EmployeeDto employeeDto) {
		EmployeeDto createEmployee = this.employeeService.createAdmin(employeeDto);
		return new ResponseEntity<EmployeeDto>(createEmployee, HttpStatus.CREATED);
	}
	
	// create Recptionist --send user details in json format to create Recptionist
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/employee/receptionist")
	public ResponseEntity<EmployeeDto> createReceptionistN(@Valid @RequestBody EmployeeDto employeeDto) {
		EmployeeDto createEmployee = this.employeeService.createReceptionist(employeeDto);
		return new ResponseEntity<EmployeeDto>(createEmployee, HttpStatus.CREATED);
	}
	
	// create Accountant --send user details in json format to create Accountant
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/employee/accountant")
	public ResponseEntity<EmployeeDto> createAccountantN(@Valid @RequestBody EmployeeDto employeeDto) {
		EmployeeDto createEmployee = this.employeeService.createAccountant(employeeDto);
		return new ResponseEntity<EmployeeDto>(createEmployee, HttpStatus.CREATED);
	}

	// update
	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/employee/{Id}")
	public ResponseEntity<EmployeeDto> updateEmployee(@Valid @RequestBody EmployeeDto employeeDto,
			@PathVariable Integer Id) {
		EmployeeDto updatedEmp = this.employeeService.updateEmployee(employeeDto, Id);
		return new ResponseEntity<EmployeeDto>(updatedEmp, HttpStatus.OK);
	}

	// delete
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/employee/{Id}")
	public ResponseEntity<ApiResponse> deleteEmployee(@PathVariable Integer Id) {
		this.employeeService.deleteEmployee(Id);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Employee is deleted successfully !!", true), HttpStatus.OK);
	}

	// get
	@GetMapping("/employee/{Id}")
	public ResponseEntity<EmployeeDto> getEmpoyee(@PathVariable Integer Id) {
		EmployeeDto employeeDto = this.employeeService.getEmployee(Id);
		return new ResponseEntity<EmployeeDto>(employeeDto, HttpStatus.OK);
	}
	
	//get all - pagination
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/employee")
	public ResponseEntity<EmployeeResponse> getAllEmployees(
			@RequestParam(value = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
			@RequestParam(value = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
			@RequestParam(value = "sortBy", defaultValue = AppConstants.SORT_BY, required = false) String sortBy,
			@RequestParam(value = "sortDir", defaultValue = AppConstants.SORT_DIR, required = false) String sortDir) {

		EmployeeResponse employeeResponse = this.employeeService.getAllEmployees(pageNumber, pageSize, sortBy, sortDir);
		return new ResponseEntity<EmployeeResponse>(employeeResponse, HttpStatus.OK);
	}
	
/*
	// create
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/user/{userId}/employee")
	public ResponseEntity<EmployeeDto> createEmployee(@Valid @RequestBody EmployeeDto employeeDto,
			@PathVariable Integer userId) {
		EmployeeDto createEmployee = this.employeeService.createEmployee(employeeDto, userId);
		return new ResponseEntity<EmployeeDto>(createEmployee, HttpStatus.CREATED);
	}

	//create Recptionist
	@PostMapping("/user/{userId}/employee/receptionist")
	public ResponseEntity<EmployeeDto> createReceptionist(@Valid @RequestBody EmployeeDto employeeDto,
			@PathVariable Integer userId) {
		EmployeeDto createEmployee = this.employeeService.createReceptionistO(employeeDto, userId);
		return new ResponseEntity<EmployeeDto>(createEmployee, HttpStatus.CREATED);
	}
	
	//create Accountant
	@PostMapping("/user/{userId}/employee/accountant")
	public ResponseEntity<EmployeeDto> createAccountant(@Valid @RequestBody EmployeeDto employeeDto,
			@PathVariable Integer userId) {
		EmployeeDto createEmployee = this.employeeService.createAccountantO(employeeDto, userId);
		return new ResponseEntity<EmployeeDto>(createEmployee, HttpStatus.CREATED);
	}
*/
}