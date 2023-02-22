package com.hms.payloads;


import java.time.LocalTime;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class DoctorDto {
	private int doctorId;
	
	@NotBlank
	private double doctorFee;
	
	@NotBlank
	private LocalTime startTime;
	
	@NotBlank
	private LocalTime endTime;
}
