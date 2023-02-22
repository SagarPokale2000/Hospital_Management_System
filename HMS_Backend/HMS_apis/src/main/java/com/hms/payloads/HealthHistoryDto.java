package com.hms.payloads;

import java.time.LocalDate;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;



public class HealthHistoryDto {

	
	private int healthId;
	
	private String diseases;
	
	private LocalDate appointmentDate;
	
	private LocalDate admitDate;
	
	@NotBlank
	@Size(min = 50, message = "min size of Health_History  desc is 50")
	private String  prescriptionInstruction;
	
	private LocalDate dischargeDate;
	
	private LocalDate paymentDate;
	
	private PatientDto patient;
}
