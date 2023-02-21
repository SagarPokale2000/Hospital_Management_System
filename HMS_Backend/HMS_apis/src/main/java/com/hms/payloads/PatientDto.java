package com.hms.payloads;

import java.time.LocalDate;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

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
	
	@NotEmpty
	private LocalDate appointmentTime;
	
	private Boolean admitStatus;
	
	private Boolean currentStatus;
	
	private Boolean action;
}
