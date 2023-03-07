package com.hms.services.impl;

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
	public UserDto getUser(Integer Id) {
		User user = this.userRepo.findById(Id).orElseThrow(() -> new ResourceNotFoundException("User", "User id", Id));
		return this.modelMapper.map(user, UserDto.class);
	}
}
