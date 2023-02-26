/**
*	@Developer : Sagar_Pokale
*	@Date		 	   : 26-Feb-2023 10:49:40 AM
*/


package com.hms.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Role {

	@Id
	private int id;
		
	private String name;

}
