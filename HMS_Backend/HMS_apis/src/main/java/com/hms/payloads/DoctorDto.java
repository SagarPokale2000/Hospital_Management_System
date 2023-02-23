package com.hms.payloads;

import java.time.LocalTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DoctorDto {
	private int doctorId;
	
	private double doctorFee;
	
	private LocalTime startTime;
	
	private LocalTime endTime;
	
	private EmployeeDto employee;
	
	//private List<PatientDto> patients= new ArrayList<>();
}
