package com.hms.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.payloads.ApiResponse;
import com.hms.payloads.UserDto;
import com.hms.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;

	// create
	@PostMapping("/")
	public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto) {
		UserDto createUser = this.userService.createUser(userDto);
		return new ResponseEntity<UserDto>(createUser, HttpStatus.CREATED);
	}

	// update
	@PutMapping("/{Id}")
	public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto userDto, @PathVariable Integer Id) {
		UserDto updatedUser = this.userService.updateUser(userDto, Id);
		return new ResponseEntity<UserDto>(updatedUser, HttpStatus.OK);
	}

	// delete
	//@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/{Id}")
	public ResponseEntity<ApiResponse> deleteUser(@PathVariable Integer Id) {
		this.userService.deleteUser(Id);
		return new ResponseEntity<ApiResponse>(new ApiResponse("User is deleted successfully !!", true), HttpStatus.OK);
	}

	// get ( not needed )
	@GetMapping("/{Id}")
	public ResponseEntity<UserDto> getUser(@PathVariable Integer Id) {
		UserDto userDto = this.userService.getUser(Id);
		return new ResponseEntity<UserDto>(userDto, HttpStatus.OK);
	}

	// get all ( not needed )
	@GetMapping("/")
	public ResponseEntity<List<UserDto>> getUsers() {
		List<UserDto> users = this.userService.getUsers();
		return ResponseEntity.ok(users);
	}
}
