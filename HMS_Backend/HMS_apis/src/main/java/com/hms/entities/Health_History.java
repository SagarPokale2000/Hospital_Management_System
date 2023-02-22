package com.hms.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="health_history")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Health_History {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "health_history_Id")
	private Integer id;
	
	@Column(length = 300, nullable= false)
	private String diseases;
	
	@Column(name = "appointment_date")
	private LocalDate appointmentDate;
	
	@Column(name = "admit_date")
	private LocalDate admitDate;
	
	@Column(name = "prescription_instruction",length=1000)
	private String  prescriptionInstruction;
	
	@Column(name = "discharge_date")
	private LocalDate dischargeDate;
	
	@CreationTimestamp
	@Column(name = "payment_date")
	private LocalDate paymentDate;
	
	@ManyToOne
	@JoinColumn(name = "patient_Id", nullable = false)
	private Patient patients;
	
	@OneToMany(mappedBy = "healthHistory", cascade = CascadeType.ALL)
	private List<Medicine> medicines= new ArrayList<>();
}