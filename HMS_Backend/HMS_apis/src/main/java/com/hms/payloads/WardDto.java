package com.hms.payloads;

import java.util.HashSet;
import java.util.Set;

import com.hms.entities.Patient;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class WardDto {

	
	private Integer wardId;
	
	private String wardType;
	
	private String allocatedBed;
	
	private Double wardCharges;
	
	private Set<PatientDto> patients= new HashSet();
}
