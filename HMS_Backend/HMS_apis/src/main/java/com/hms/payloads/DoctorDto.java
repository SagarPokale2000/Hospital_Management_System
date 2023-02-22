package com.hms.payloads;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDto {
	private int doctorId;
	
	private double doctorFee;
	
	private LocalTime startTime;
	
	private LocalTime endTime;
	
	//private List<PatientDto> patients= new ArrayList<>();
}
