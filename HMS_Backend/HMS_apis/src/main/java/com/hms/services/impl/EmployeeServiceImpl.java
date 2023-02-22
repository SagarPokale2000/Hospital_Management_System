package com.hms.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.hms.entities.Employee;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.EmployeeDto;
import com.hms.repository.EmployeeRepo;
import com.hms.services.EmployeeService;

public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepo employeeRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee emp = this.modelMapper.map(employeeDto,Employee.class);
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
	public void deleteEmployee(Integer Id) {
		Employee emp = this.employeeRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee ", "employee id",Id));
		this.employeeRepo.delete(emp);
	}

	@Override
	public EmployeeDto getEmployee(Integer Id) {
		Employee emp = this.employeeRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor", "doctor id", Id));
		return this.modelMapper.map(emp, EmployeeDto.class);
	}

	@Override
	public List<EmployeeDto> getEmployees() {
		List<Employee> employees = this.employeeRepo.findAll();
		List<EmployeeDto> empDtos = employees.stream().map((emp) -> this.modelMapper.map(emp, EmployeeDto.class))
				.collect(Collectors.toList());
		return empDtos;
	}

}
