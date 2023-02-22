package com.hms.payloads;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
	private int id;
	
	@NotEmpty
	@Size(min=2,message="firstname must be min of 2 characters")
	private String firstName;
	
	@NotEmpty
	@Size(min=2,message="lastname must be min of 2 characters")
	private String lastName;
	
	@Email(message="Email address is not valid")
	private String email;
	
	@NotEmpty
	@Pattern(regexp = "^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{4,15})$",message = "Password must be min of 4 characters and max of 15 characters and password must contain atleast 1 uppercase, 1 lowercase, 1 special character and 1 digit " )
	private String password;
	
	@NotEmpty
	private String gender;
	
	@NotBlank
	@Size(min=8,max=15,message="Mobile No must be min of 8 characters and max of 15 characters")
	private String mobileNo;
	
	private String bloodGroup;
	
	private LocalDate dob;
	
	private AddressDto address;
	/*
	private EmployeeDto employee;
	
	private PatientDto patient;
	*/
}
