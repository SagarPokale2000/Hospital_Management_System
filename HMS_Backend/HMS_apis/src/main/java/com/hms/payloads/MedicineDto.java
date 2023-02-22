package com.hms.payloads;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class MedicineDto {
	private int healthId;
	
	private String medicineName;
	private String duration;
	private Integer quantity;
	
	private Double medicineCharges;
	
	private HealthHistoryDto health;
}
