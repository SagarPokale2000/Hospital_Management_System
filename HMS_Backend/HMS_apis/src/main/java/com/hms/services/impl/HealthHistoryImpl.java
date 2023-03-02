package com.hms.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.hms.entities.Health_History;
import com.hms.entities.Patient;
import com.hms.entities.Ward;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.HealthHistoryDto;
import com.hms.payloads.HealthHistoryResponse;
import com.hms.repository.HealthHistoryRepo;
import com.hms.repository.PatientRepo;
import com.hms.repository.WardRepo;
import com.hms.services.HealthHistoryService;

@Service
public class HealthHistoryImpl implements HealthHistoryService {

	@Autowired
	private HealthHistoryRepo healthRepo;

	@Autowired
	private PatientRepo patientRepo;

	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private WardRepo wardRepo;
	 
	//add patient appointment (create health history )
	@Override
	public HealthHistoryDto addAppointment(HealthHistoryDto healthDto, Integer patientId) {
		Patient patient = this.patientRepo.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient ", "Patient id", patientId));

		Health_History healths = this.modelMapper.map(healthDto, Health_History.class);

		healths.setPatient(patient);

		Health_History newHealths = this.healthRepo.save(healths);

		return this.modelMapper.map(newHealths, HealthHistoryDto.class);
	}
	

	@Override
	public HealthHistoryDto updatePatientWard(HealthHistoryDto healthDto ,Integer healthId,Integer wardId) {

		Health_History healths = this.healthRepo.findById(healthId)
				.orElseThrow(() -> new ResourceNotFoundException("HealthHistory ", "health id", healthId));
		
		Patient patient = healths.getPatient();

		Ward ward = this.wardRepo.findById(wardId)
				.orElseThrow(() -> new ResourceNotFoundException("Ward", "ward id ", wardId));

		patient.setWard(ward);
		//need to check bed logic allocatedBed
		healths.setAllocatedBed(healthDto.getAllocatedBed());

		Patient updatedPatient = this.patientRepo.save(patient);
		
		Health_History updatedHealth = this.healthRepo.save(healths);
		return this.modelMapper.map(updatedHealth, HealthHistoryDto.class);
	}

	//update HH
	@Override
	public HealthHistoryDto updateHealthHistory(HealthHistoryDto healthDto, Integer healthId) {

		Health_History healths = this.healthRepo.findById(healthId)
				.orElseThrow(() -> new ResourceNotFoundException("HealthHistory ", "health id", healthId));
//appointment
		healths.setSymptoms(healthDto.getSymptoms());
		healths.setAppointmentDate(healthDto.getAppointmentDate());
		healths.setAppointmentTime(healthDto.getAppointmentTime());

//updated by doctor
		healths.setDiseases(healthDto.getDiseases());
		healths.setPrescriptionInstruction(healthDto.getPrescriptionInstruction());

//update by receptionist
		healths.setAdmitDate(healthDto.getAdmitDate());
		healths.setDischargeDate(healthDto.getDischargeDate());
		
//creation time stamp
		healths.setPaymentDate(healthDto.getPaymentDate());

		Health_History updatedHealth = this.healthRepo.save(healths);
		return this.modelMapper.map(updatedHealth, HealthHistoryDto.class);
	}

	@Override
	public void deleteHealthHistory(Integer healthId) {
		Health_History health = this.healthRepo.findById(healthId)
				.orElseThrow(() -> new ResourceNotFoundException("Health_History ", "health id", healthId));

		this.healthRepo.delete(health);
	}

	
	// get health history by patient ( need pagination here )
	@Override
	public List<HealthHistoryDto> getHealthHistoryBypatient(Integer patientId) {
		Patient patient = this.patientRepo.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient", "patient id", patientId));
		List<Health_History> healths = this.healthRepo.findByPatient(patient);

		List<HealthHistoryDto> healthDtos = healths.stream()
				.map((health) -> this.modelMapper.map(health, HealthHistoryDto.class)).collect(Collectors.toList());

		return healthDtos;
	}
//get all health history
	@Override
	public HealthHistoryResponse getAllHealthHistory(Integer pageNumber, Integer pageSize, String sortBy,
			String sortDir ) {
		Sort sort = (sortDir.equalsIgnoreCase("asc")) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();

		Pageable p = PageRequest.of(pageNumber, pageSize, sort);

		Page<Health_History> pageHealthHistory = this.healthRepo.findAll(p);

		List<Health_History> allHealthHistory = pageHealthHistory.getContent();

		List<HealthHistoryDto> healthDtos = allHealthHistory.stream()
				.map((health) -> this.modelMapper.map(health, HealthHistoryDto.class)).collect(Collectors.toList());

		HealthHistoryResponse helathResponse = new HealthHistoryResponse();

		helathResponse.setContent(healthDtos);
		helathResponse.setPageNumber(pageHealthHistory.getNumber());
		helathResponse.setPageSize(pageHealthHistory.getSize());
		helathResponse.setTotalElements(pageHealthHistory.getTotalElements());

		helathResponse.setTotalPages(pageHealthHistory.getTotalPages());
		helathResponse.setLastPage(pageHealthHistory.isLast());

		return helathResponse;
	}

	@Override
	public HealthHistoryDto getHealthHistoryById(Integer healthId) {
		Health_History healths = this.healthRepo.findById(healthId)
				.orElseThrow(() -> new ResourceNotFoundException("Health_History", "health id", healthId));
		return this.modelMapper.map(healths, HealthHistoryDto.class);
	}

	@Override
	public List<HealthHistoryDto> searchHealthHistory(String keyword) {
		List<Health_History> healths = this.healthRepo.searchByHealthId("%" + keyword + "%");
		List<HealthHistoryDto> healthDtos = healths.stream()
				.map((health) -> this.modelMapper.map(health, HealthHistoryDto.class)).collect(Collectors.toList());
		return healthDtos;
	}


}