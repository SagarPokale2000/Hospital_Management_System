package com.hms.controller;

import java.util.List;

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

import com.hms.payloads.ApiResponse;
import com.hms.payloads.EmployeeDto;
import com.hms.services.EmployeeService;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;

	// create
	@PostMapping("/")
	public ResponseEntity<EmployeeDto> createEmployee(@Valid @RequestBody EmployeeDto employeeDto) {
		EmployeeDto createEmployee = this.employeeService.createEmployee(employeeDto);
		return new ResponseEntity<EmployeeDto>(createEmployee, HttpStatus.CREATED);
	}

	// update
	@PutMapping("/{Id}")
	public ResponseEntity<EmployeeDto> updateEmployee(@Valid @RequestBody EmployeeDto employeeDto, @PathVariable Integer Id) {
		EmployeeDto updatedEmp = this.employeeService.updateEmployee(employeeDto, Id);
		return new ResponseEntity<EmployeeDto>(updatedEmp, HttpStatus.OK);
	}

	// delete
	//@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/{Id}")
	public ResponseEntity<ApiResponse> deleteEmployee(@PathVariable Integer Id) {
		this.employeeService.deleteEmployee(Id);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Employee is deleted successfully !!", true), HttpStatus.OK);
	}

	// get
	@GetMapping("/{Id}")
	public ResponseEntity<EmployeeDto> getUser(@PathVariable Integer Id) {
		EmployeeDto employeeDto = this.employeeService.getEmployee(Id);
		return new ResponseEntity<EmployeeDto>(employeeDto, HttpStatus.OK);
	}

	// get all
	@GetMapping("/")
	public ResponseEntity<List<EmployeeDto>> getUsers() {
		List<EmployeeDto> emps = this.employeeService.getEmployees();
		return ResponseEntity.ok(emps);
	}
}
