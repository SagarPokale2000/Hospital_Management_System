package com.hms.payloads;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto {
	
	private int Id;
	
	@NotEmpty
	private String plotNo;
	
	@NotEmpty
	@Size(min=2,message="buildingName must be min of 2 characters")
	private String buildingName;
	
	@NotEmpty
	@Size(min=2,message="areaName must be min of 5 characters")
	private String areaName;
	
	@NotEmpty
	private String city;
	
	@NotEmpty
	private String state;
	
	@NotEmpty
	private String country;
	
	@NotEmpty
	private int pincode;
}
