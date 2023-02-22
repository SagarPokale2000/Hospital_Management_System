package com.hms.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.payloads.EmployeeDto;
import com.hms.services.EmployeeService;

@RestController
@RequestMapping("/api")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;

	// create
	@PostMapping("/user/{userId}/employee")
	public ResponseEntity<EmployeeDto> createEmployee(@Valid @RequestBody EmployeeDto employeeDto,@PathVariable Integer userId) {
		EmployeeDto createEmployee = this.employeeService.createEmployee(employeeDto,userId);
		return new ResponseEntity<EmployeeDto>(createEmployee, HttpStatus.CREATED);
	}

	// update
	@PutMapping("/employee/{Id}")
	public ResponseEntity<EmployeeDto> updateEmployee(@Valid @RequestBody EmployeeDto employeeDto, @PathVariable Integer Id) {
		EmployeeDto updatedEmp = this.employeeService.updateEmployee(employeeDto, Id);
		return new ResponseEntity<EmployeeDto>(updatedEmp, HttpStatus.OK);
	}

	// get
	@GetMapping("/employee/{Id}")
	public ResponseEntity<EmployeeDto> getUser(@PathVariable Integer Id) {
		EmployeeDto employeeDto = this.employeeService.getEmployee(Id);
		return new ResponseEntity<EmployeeDto>(employeeDto, HttpStatus.OK);
	}
}
