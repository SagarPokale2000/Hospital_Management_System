package com.hms.payloads;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
//@JsonInclude(value = Include.NON_NULL)
public class AddressDto {

	private int id;

	@NotBlank
	private String plotNo;

	@NotBlank
	@Size(min = 2, message = "buildingName must be min of 2 characters")
	private String buildingName;

	@NotBlank
	@Size(min = 2, message = "areaName must be min of 5 characters")
	private String areaName;

	@NotBlank
	private String city;

	@NotBlank
	private String state;

	@NotBlank
	private String country;

	private int pincode;

}
