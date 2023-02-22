package com.hms.services;

import java.util.List;

import com.hms.payloads.EmployeeDto;
import com.hms.payloads.UserDto;

public interface EmployeeService {
				// create
				EmployeeDto createEmployee(EmployeeDto employeeDto);

				// update
				EmployeeDto updateEmployee(EmployeeDto employeeDto, Integer Id);

				// delete
				void deleteEmployee(Integer Id);

				// get
				EmployeeDto getEmployee(Integer Id);

				// get All
				List<EmployeeDto> getEmployees();
}
