package com.hms.payloads;


import java.time.LocalTime;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.hms.entities.Doctor;
import com.hms.entities.Ward;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientDto {

	private Integer patientId;

	@NotEmpty
	@Size(min=5,message="firstname must be min of 5 characters")
	private String symptoms;
	
	private LocalTime appointmentTime;
	
	private Boolean admitStatus;
	
	private Boolean currentStatus;
	
	private Boolean action;
	/*
	private UserDto user;
	*/
	private DoctorDto doctor;
	
	private WardDto ward;
}
