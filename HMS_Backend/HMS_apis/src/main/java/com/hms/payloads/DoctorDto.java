package com.hms.payloads;


import java.time.LocalTime;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Setter
@Getter
public class DoctorDto {
	private int Id;
	
	@NotBlank
	private double doctorFee;
	
	@NotBlank
	private LocalTime startTime;
	
	@NotBlank
	private LocalTime endTime;
}
