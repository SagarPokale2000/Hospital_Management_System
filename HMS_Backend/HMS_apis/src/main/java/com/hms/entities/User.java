package com.hms.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.hms.payloads.AddressDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_Id")
	private int id;
	@Column(name = "first_name", length = 45)
	private String firstName;
	@Column(name = "last_name", length = 45)
	private String lastName;
	@Column(length = 45, unique = true)
	private String email;
	@Column(length = 100, nullable = false)
	private String password;
	@Column(length = 20)
	private String gender;
	@Column(name = "security_que", length = 100)
	private String securityQue;
	@Column(name = "security_ans", length = 100)
	private String securityAns;
	@Column(name = "mobile_no", length = 15)
	private String mobileNo;
	@Column(name = "blood_group", length = 10)
	private String bloodGroup;
	
	private LocalDate dob;
	
	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
	private Patient patient;
	
	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
	private Employee employee;
	
	@OneToOne()
	@JoinColumn(name = "address_Id", nullable = false)
	private Address address;
	
	
	
}