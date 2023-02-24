package com.hms.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.hms.entities.Employee;
import com.hms.entities.User;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.EmployeeDto;
import com.hms.payloads.EmployeeResponse;
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
				.orElseThrow(() -> new ResourceNotFoundException("Employee", "employee id", Id));
		return this.modelMapper.map(emp, EmployeeDto.class);
	}

	@Override
	public void deleteEmployee(Integer Id) {
		Employee emp = this.employeeRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee", "employee id", Id));

		User user = emp.getUser();

		this.userRepo.delete(user);
	}

	@Override
	public EmployeeResponse getAllEmployees(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {
		Sort sort = (sortDir.equalsIgnoreCase("asc")) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();

		Pageable p = PageRequest.of(pageNumber, pageSize, sort);

		Page<Employee> pageEmp = this.employeeRepo.findAll(p);

		List<Employee> allEmps = pageEmp.getContent();

		List<EmployeeDto> EmployeeDtos = allEmps.stream().map((emp) -> this.modelMapper.map(emp, EmployeeDto.class))
				.collect(Collectors.toList());

		EmployeeResponse employeeResponse = new EmployeeResponse();

		employeeResponse.setContent(EmployeeDtos);
		employeeResponse.setPageNumber(pageEmp.getNumber());
		employeeResponse.setPageSize(pageEmp.getSize());
		employeeResponse.setTotalElements(pageEmp.getTotalElements());

		employeeResponse.setTotalPages(pageEmp.getTotalPages());
		employeeResponse.setLastPage(pageEmp.isLast());

		return employeeResponse;
	}
}
