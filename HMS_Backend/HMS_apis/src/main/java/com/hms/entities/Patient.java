package com.hms.entities;


import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="patients")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "patient_Id")
	private Integer patientId;
	
	@Column(name="symptoms",length = 100, nullable= false)
	private String symptoms;
	
	@CreationTimestamp
	@Column(name = "appointment_time")
	@JsonFormat(pattern = "HH:mm:ss")
	private LocalTime appointmentTime;
	
	@Column(name = "admit_status")
	private Boolean admitStatus;
	
	@Column(name = "current_status")
	private Boolean currentStatus;
	
	private Boolean action;
	
	@OneToOne()
	@JoinColumn(name = "user_Id", nullable = false)
	private User user;
	
	@ManyToOne
	@JoinColumn( name = "doctor_Id")
	private Doctor doctor;
	
	@OneToMany(mappedBy = "patients", cascade = CascadeType.ALL)
	private Set<Health_History> health_history= new HashSet();
	
	@ManyToOne
	@JoinColumn( name = "ward_Id")
	private Ward ward;
}