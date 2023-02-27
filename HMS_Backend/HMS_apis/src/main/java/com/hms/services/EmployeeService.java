package com.hms.services;

import com.hms.payloads.EmployeeDto;
import com.hms.payloads.EmployeeResponse;

public interface EmployeeService {
	// create
	EmployeeDto createEmployee(EmployeeDto employeeDto, Integer userId);
	
	EmployeeDto createAdmin(EmployeeDto employeeDto);

	EmployeeDto createReceptionist(EmployeeDto employeeDto);

	EmployeeDto createAccountant(EmployeeDto employeeDto);

//	EmployeeDto createReceptionistO(EmployeeDto employeeDto, Integer userId);

	//EmployeeDto createAccountantO(EmployeeDto employeeDto, Integer userId);

	// update
	EmployeeDto updateEmployee(EmployeeDto employeeDto, Integer Id);

	// get
	EmployeeDto getEmployee(Integer Id);

	// delete
	void deleteEmployee(Integer Id);

	// get all Employees
	EmployeeResponse getAllEmployees(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);
}
