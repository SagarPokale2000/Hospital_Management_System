package com.hms.services;

import com.hms.payloads.EmployeeDto;
import com.hms.payloads.EmployeeResponse;

public interface EmployeeService {
	// create
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto createAdmin(EmployeeDto employeeDto);

	
	// update
	EmployeeDto updateEmployee(EmployeeDto employeeDto, Integer Id);

	// delete
	void deleteEmployee(Integer Id);

	// get all Employees
	EmployeeResponse getAllEmployees(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

}
