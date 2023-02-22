package com.hms.services;

import java.util.List;

import com.hms.payloads.UserDto;

public interface UserService {
			// create
			UserDto createUser(UserDto userDto);

			// update
			UserDto updateUser(UserDto userDto, Integer Id);

			// delete
			void deleteUser(Integer Id);

			// get
			UserDto getUser(Integer Id);

			// get All
			List<UserDto> getUsers();
}