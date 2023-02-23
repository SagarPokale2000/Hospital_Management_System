package com.hms.payloads;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.hms.entities.Medicine;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
@JsonInclude(value = Include.NON_NULL)
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
	
	@JsonIgnoreProperties(value = "health_histories")
	private PatientDto patient;
	
	@JsonIgnoreProperties(value = "healthHistory")
	private List<Medicine> medicines= new ArrayList<>();
}