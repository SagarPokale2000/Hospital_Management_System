package com.hms.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "resources")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Resources {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "resource_Id")
	private int id;
	
	@Column(name = "resource_name", length = 45)
	private String resourceName;

	@Column(name = "total_quantity")
	private int totalQuantity;

	@Column(name = "occupy_quantity")
	private int occupyQuantity;

	@Column(name = "remaining_quantity")
	private int remainingQuantity;
}