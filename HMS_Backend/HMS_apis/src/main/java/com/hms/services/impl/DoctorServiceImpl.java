package com.hms.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hms.config.AppConstants;
import com.hms.entities.Doctor;
import com.hms.entities.Employee;
import com.hms.entities.Role;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.AddressDto;
import com.hms.payloads.DoctorDto;
import com.hms.payloads.EmployeeDto;
import com.hms.payloads.UserDto;
import com.hms.repository.AddressRepo;
import com.hms.repository.DoctorRepo;
import com.hms.repository.EmployeeRepo;
import com.hms.repository.RoleRepo;
import com.hms.services.DoctorService;

@Service
public class DoctorServiceImpl implements DoctorService {

	@Autowired
	private DoctorRepo doctorRepo;

	@Autowired
	private EmployeeRepo employeeRepo;

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private AddressRepo addressRepo;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private RoleRepo roleRepo;
	
	@Override
	public DoctorDto createDoctor(DoctorDto doctorDto, Integer empId) {
		Employee emp = this.employeeRepo.findById(empId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee ", "employee Id", empId));

		Role role = this.roleRepo.findById(AppConstants.ROLE_RECEPTIONIST)
				.orElseThrow((() -> new ResourceNotFoundException("Role", "Role id", 0)));
		
		emp.getUser().addRole(role);

		Doctor doc = this.modelMapper.map(doctorDto, Doctor.class);

		doc.setEmployee(emp);

		Doctor addedDoc = this.doctorRepo.save(doc);
		return this.modelMapper.map(addedDoc, DoctorDto.class);
	}

	@Override
	public DoctorDto createDoctorN(DoctorDto doctorDto) {
		Doctor doc = this.modelMapper.map(doctorDto, Doctor.class);

		EmployeeDto employeeDto = doctorDto.getEmployee();

		Employee emp = this.modelMapper.map(employeeDto, Employee.class);

		UserDto userDto = employeeDto.getUser();

		AddressDto addressDto = userDto.getAddress();
		Address address = this.modelMapper.map(addressDto, Address.class);

		User user = this.modelMapper.map(userDto, User.class);
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		user.setRole("ROLE_RECEPTIONIST");
		user.setAddress(null);
		User addedUser = this.userRepo.save(user);

		address.setUser(addedUser);
		Address addedAddress = this.addressRepo.save(address);

		User userAddedAddress = addedAddress.getUser();
		
		emp.setUser(userAddedAddress);
		Employee addedEmp = this.employeeRepo.save(emp);
		
		doc.setEmployee(addedEmp);

		Doctor addedDoc = this.doctorRepo.save(doc);
		return this.modelMapper.map(addedDoc, DoctorDto.class);
	}

	@Override
	public DoctorDto updateDoctor(DoctorDto doctorDto, Integer doctorId) {
		Doctor doc = this.doctorRepo.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor ", "Doctor Id", doctorId));
		doc.setDoctorFee(doctorDto.getDoctorFee());
		doc.setStartTime(doctorDto.getStartTime());
		doc.setEndTime(doctorDto.getEndTime());
		Doctor updateddoc = this.doctorRepo.save(doc);
		return this.modelMapper.map(updateddoc, DoctorDto.class);
	}

	@Override
	public DoctorDto getDoctor(Integer doctorId) {
		Doctor doc = this.doctorRepo.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor", "doctor id", doctorId));
		return this.modelMapper.map(doc, DoctorDto.class);
	}

	@Override
	public List<DoctorDto> getDoctor() {
		List<Doctor> doctors = this.doctorRepo.findAll();
		List<DoctorDto> docDtos = doctors.stream().map((doc) -> this.modelMapper.map(doc, DoctorDto.class))
				.collect(Collectors.toList());
		return docDtos;
	}

}