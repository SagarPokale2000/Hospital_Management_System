package com.hms.services;

import com.hms.payloads.EmployeeDto;

public interface EmployeeService {
				// create
				EmployeeDto createEmployee(EmployeeDto employeeDto,Integer userId);

				// update
				EmployeeDto updateEmployee(EmployeeDto employeeDto, Integer Id);

				// get
				EmployeeDto getEmployee(Integer Id);
}
