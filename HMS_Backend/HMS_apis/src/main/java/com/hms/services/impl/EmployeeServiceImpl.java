package com.hms.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.entities.Employee;
import com.hms.entities.User;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.EmployeeDto;
import com.hms.repository.EmployeeRepo;
import com.hms.repository.UserRepo;
import com.hms.services.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepo employeeRepo;

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto, Integer userId) {
		User user = this.userRepo.findById(userId)
				.orElseThrow((() -> new ResourceNotFoundException("User", "User id", userId)));

		Employee emp = this.modelMapper.map(employeeDto, Employee.class);
		emp.setUser(user);
		Employee addedEmp = this.employeeRepo.save(emp);
		return this.modelMapper.map(addedEmp, EmployeeDto.class);
	}

	@Override
	public EmployeeDto updateEmployee(EmployeeDto employeeDto, Integer Id) {

		Employee emp = this.employeeRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee ", "employee Id", Id));

		emp.setRole(employeeDto.getRole());
		emp.setQualificaton(employeeDto.getQualificaton());
		emp.setSalary(employeeDto.getSalary());
		emp.setHiredate(employeeDto.getHiredate());
		emp.setStatus(employeeDto.getStatus());

		Employee updatedEmp = this.employeeRepo.save(emp);
		return this.modelMapper.map(updatedEmp, EmployeeDto.class);
	}

	@Override
	public EmployeeDto getEmployee(Integer Id) {
		Employee emp = this.employeeRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor", "doctor id", Id));
		return this.modelMapper.map(emp, EmployeeDto.class);
	}
}
