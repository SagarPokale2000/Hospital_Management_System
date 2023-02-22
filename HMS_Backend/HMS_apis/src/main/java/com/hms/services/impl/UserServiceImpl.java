package com.hms.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.entities.User;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.UserDto;
import com.hms.repository.UserRepo;
import com.hms.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public UserDto createUser(UserDto userDto) {
		User user = this.modelMapper.map(userDto,User.class);
		User addedUser = this.userRepo.save(user);
		return this.modelMapper.map(addedUser, UserDto.class);
	}

	@Override
	public UserDto updateUser(UserDto userDto, Integer Id) {
		User user = this.userRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("User ", "User id", Id));
		
		user.setFirstName(userDto.getFirstName());
		user.setLastName(userDto.getLastName());
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		user.setGender(userDto.getGender());
		user.setMobileNo(userDto.getMobileNo());
		user.setDOB(userDto.getDOB());
		user.setBloodGroup(userDto.getBloodGroup());
		
		User updatedUser = this.userRepo.save(user);
		return this.modelMapper.map(updatedUser, UserDto.class);
	}

	@Override
	public void deleteUser(Integer Id) {
		User user = this.userRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("User ", "User id", Id));
		this.userRepo.delete(user);
	}

	@Override
	public UserDto getUser(Integer Id) {
		User user = this.userRepo.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("User", "User id", Id));
		return this.modelMapper.map(user, UserDto.class);
	}

	@Override
	public List<UserDto> getUsers() {
		List<User> users = this.userRepo.findAll();
		List<UserDto> userDtos = users.stream().map((user) -> this.modelMapper.map(user, UserDto.class))
				.collect(Collectors.toList());
		return userDtos;
	}
}
