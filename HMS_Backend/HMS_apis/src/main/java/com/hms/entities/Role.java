package com.hms.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
public class Role {

	@Id
	private int id;
		
	private String name;
	
	public Role()
	{
		
	}
	
	public Role(int rolePatient, String name) {
		this.id = rolePatient;
		this.name = name;
	}
	
	
}
