//package com.hms.services.impl;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//
//import com.hms.entities.Health_History;
//import com.hms.exceptions.ResourceNotFoundException;
//import com.hms.payloads.HealthHistoryDto;
//import com.hms.payloads.HealthHistoryResponse;
//import com.hms.repository.HealthHistoryRepo;
//import com.hms.repository.PatientRepo;
//import com.hms.services.HealthHistoryService;
//
//public class HealthHistoryImpl implements HealthHistoryService {
///*
//	@Autowired
//	private HealthHistoryRepo healthRepo;
//	
//	
//	@Autowired
//	private PatientRepo patientRepo;
//	
//	
//	 @Autowired
//	    private ModelMapper modelMapper; 
//	 
//	@Override
//	public HealthHistoryDto createMedicine(HealthHistoryDto healthDto, Integer patientId) {
//		 Patient patient = this.patientRepo.findById(patientId)
//	                .orElseThrow(() -> new ResourceNotFoundException("Patient ", "Patient id", patientId));
//
//	       
//
//	        Health_History healths = this.modelMapper.map(healthDto, Health_History.class);
//	      
//	        
//	        patient.setPatient(patient);
//	        
//
//	        Health_History newHealths = this.healthRepo.save(healths);
//
//	        return this.modelMapper.map(newHealths, HealthHistoryDto.class);
//	}
//
//	@Override
//	public HealthHistoryDto updateHealthHistory(HealthHistoryDto healthDto, Integer healthId) {
//		Health_History healths = this.healthRepo.findById(healthId)
//	                .orElseThrow(() -> new ResourceNotFoundException("HealthHistory ", "health id", healthId));
//
//	        Patient patient = this.patientRepo.findById(healthDto.getPatient().getPatientId()).get();
//
//	        healths.setDiseases(healthDto.getDiseases());
//	        healths.setAppointmentDate(healthDto.getAppointmentDate());
//	        healths.setAdmitDate(healthDto.getAdmitDate());
//	        healths.setPrescriptionInstruction(healthDto.getPrescriptionInstruction());
//	        healths.setDischargeDate(healthDto.getDischargeDate());
//	        healths.setPaymentDate(healthDto.getPaymentDate());
//	        
//	        patient.setPatient(patient);
////	        patient.setWard(ward);
//
//
//	        Patient updatedPatient = this.patientRepo.save(patient);
//	        return this.modelMapper.map(updatedPatient, PatientDto.class);
//	}
//
//	@Override
//	public void deleteHealthHistory(Integer healthId) {
//		Health_History healths = this.healthRepo.findById(healthId)
//	                .orElseThrow(() -> new ResourceNotFoundException("Health_History ", "health id", healthId));
//
//	        this.healthRepo.delete(healths);
//
//	}
//
//	@Override
//	public HealthHistoryResponse getAllHealthHistory(Integer pageNumber, Integer pageSize, String sortBy,
//			String sortDir) {
//		 Sort sort = (sortDir.equalsIgnoreCase("asc")) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
//
//	        Pageable p = PageRequest.of(pageNumber, pageSize, sort);
//
//	        Page<Health_History> pageHealthHistory = this.healthRepo.findAll(p);
//
//	        List<Health_History> allHealthHistory = pageHealthHistory.getContent();
//
//	        List<HealthHistoryDto> healthDtos = allHealthHistory.stream().map((health) -> this.modelMapper.map(health,HealthHistoryDto.class))
//	                .collect(Collectors.toList());
//
//	        HealthHistoryResponse helathResponse = new HealthHistoryResponse();
//
//	        helathResponse.setContent(healthDtos);
//	       helathResponse.setPageNumber(pageHealthHistory.getNumber());
//	       helathResponse.setPageSize(pageHealthHistory.getSize());
//	        helathResponse.setTotalElements(pageHealthHistory.getTotalElements());
//
//	        helathResponse.setTotalPages(pageHealthHistory.getTotalPages());
//	        helathResponse.setLastPage(pageHealthHistory.isLast());
//
//	        return helathResponse;
//	}
//
//	@Override
//	public HealthHistoryDto getHealthHistoryById(Integer healthId) {
//		Health_History healths = this.healthRepo.findById(healthId)
//	                .orElseThrow(() -> new ResourceNotFoundException("Health_History", "health id", healthId));
//	        return this.modelMapper.map(healths, HealthHistoryDto.class);
//	}
//
//	@Override
//	public List<HealthHistoryDto> getHealthHistoryBypatient(Integer patientId) {
//		 Patient pat = this.patientRepo.findById(patientId)
//	                .orElseThrow(() -> new ResourceNotFoundException("Patient", "patient id", patientId));
//	        List<Health_History> healths = this.healthRepo.findByPatient(pat);
//
//	        List<HealthHistoryDto> healthDtos = healths.stream().map((health) -> this.modelMapper.map(health, HealthHistoryDto.class))
//	                .collect(Collectors.toList());
//
//	        return healthDtos;
//	}
//
//	@Override
//	public List<HealthHistoryDto> searchHealthHistory(String keyword) {
//		 List<Health_History> healths = this.healthRepo.searchByHealthId("%" + keyword + "%");
//	        List<HealthHistoryDto> healthDtos = healths.stream().map((health) -> this.modelMapper.map(health, HealthHistoryDto.class)).collect(Collectors.toList());
//	        return healthDtos;
//	}
//*/
//}
