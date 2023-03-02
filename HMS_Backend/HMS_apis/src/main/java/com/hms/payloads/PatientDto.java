package com.hms.payloads;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.hms.entities.Health_History;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
//@JsonInclude(value = Include.NON_NULL)
public class PatientDto {

	private Integer id;

	private Boolean admitStatus;

	private Boolean currentStatus;

	private Boolean action;

	@JsonIgnoreProperties(value = "patient")
	private UserDto user;

	@JsonIgnoreProperties(value = "patients")
	private DoctorDto doctor;

	@JsonIgnoreProperties(value = "patients")
	private WardDto ward;

	@JsonIgnoreProperties(value = "patient")
	private List<HealthHistoryDto> health_history = new ArrayList<>();
}
