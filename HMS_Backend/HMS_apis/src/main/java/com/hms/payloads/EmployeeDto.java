package com.hms.payloads;

import java.time.LocalDate;

import javax.validation.constraints.NotEmpty;

import com.hms.entities.Doctor;
import com.hms.entities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
public class EmployeeDto {
	
	private Integer Id;
	
	@NotEmpty
	private String role;
	@NotEmpty
	private String qualificaton;

	private int salary;
	
	@NotEmpty
	private LocalDate Hiredate;

	@NotEmpty
	private boolean status;

	public boolean getStatus() {
		return status;
	}
}
