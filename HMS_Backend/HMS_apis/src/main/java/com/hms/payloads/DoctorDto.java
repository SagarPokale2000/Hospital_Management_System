package com.hms.payloads;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Setter
@Getter
public class DoctorDto {
	private int Id;
	private double doctorFee;
	private LocalDate startTime;
	private LocalDate endTime;
}
