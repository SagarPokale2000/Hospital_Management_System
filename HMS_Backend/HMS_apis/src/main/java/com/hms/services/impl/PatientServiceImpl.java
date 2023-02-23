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

import com.hms.entities.Doctor;
import com.hms.entities.Patient;
import com.hms.entities.User;
import com.hms.entities.Ward;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.PatientDto;
import com.hms.payloads.PatientResponse;
import com.hms.repository.DoctorRepo;
import com.hms.repository.PatientRepo;
import com.hms.repository.UserRepo;
import com.hms.repository.WardRepo;
import com.hms.services.PatientService;

@Service
public class PatientServiceImpl implements PatientService {

	@Autowired
	private PatientRepo patientRepo;

	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private UserRepo userRepo;

	@Autowired
	private DoctorRepo doctorRepo;

	@Autowired
	private WardRepo wardRepo;

	@Override
	public PatientDto createPatient(PatientDto patientDto,Integer userId, Integer doctorId, Integer wardId) {
		User user = this.userRepo.findById(userId)
				.orElseThrow((() -> new ResourceNotFoundException("User", "User id", userId)));

		Doctor doctor = this.doctorRepo.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor ", "Doctor id", doctorId));

		Ward ward = this.wardRepo.findById(wardId)
				.orElseThrow(() -> new ResourceNotFoundException("Ward", "ward id ", wardId));

		Patient patient = this.modelMapper.map(patientDto, Patient.class);

		patient.setUser(user);
		patient.setDoctor(doctor);
		patient.setWard(ward);

		Patient newPatient = this.patientRepo.save(patient);

		return this.modelMapper.map(newPatient, PatientDto.class);
	}

	@Override
	public PatientDto updatePatient(PatientDto patientDto, Integer patientId) {

		Patient patient = this.patientRepo.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient ", "Patient id", patientId));

		//Doctor doctor = this.doctorRepo.findById(patientDto.getDoctor().getDoctorId()).get();

		patient.setSymptoms(patientDto.getSymptoms());
		patient.setAppointmentTime(patientDto.getAppointmentTime());
		patient.setAdmitStatus(patientDto.getAdmitStatus());
		patient.setCurrentStatus(patientDto.getCurrentStatus());
		patient.setAction(patientDto.getAction());

		//patient.setDoctor(doctor);
//        patient.setWard(ward);

		Patient updatedPatient = this.patientRepo.save(patient);
		return this.modelMapper.map(updatedPatient, PatientDto.class);
	}

	@Override
	public PatientDto getPatientById(Integer patientId) {
		Patient patient = this.patientRepo.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient", "patient id", patientId));
		return this.modelMapper.map(patient, PatientDto.class);
	}

	@Override
	public PatientResponse getAllPatient(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {

		Sort sort = (sortDir.equalsIgnoreCase("asc")) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();

		Pageable p = PageRequest.of(pageNumber, pageSize, sort);

		Page<Patient> pagePatient = this.patientRepo.findAll(p);

		List<Patient> allPatients = pagePatient.getContent();

		List<PatientDto> patientDtos = allPatients.stream()
				.map((patient) -> this.modelMapper.map(patient, PatientDto.class)).collect(Collectors.toList());

		PatientResponse patientResponse = new PatientResponse();

		patientResponse.setContent(patientDtos);
		patientResponse.setPageNumber(pagePatient.getNumber());
		patientResponse.setPageSize(pagePatient.getSize());
		patientResponse.setTotalElements(pagePatient.getTotalElements());

		patientResponse.setTotalPages(pagePatient.getTotalPages());
		patientResponse.setLastPage(pagePatient.isLast());

		return patientResponse;
	}

	@Override
	public List<PatientDto> getPatientsByDoctor(Integer doctorId) {
		Doctor doc = this.doctorRepo.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor", "doctor id", doctorId));
		List<Patient> patients = this.patientRepo.findByDoctor(doc);

		List<PatientDto> patientDtos = patients.stream()
				.map((patient) -> this.modelMapper.map(patient, PatientDto.class)).collect(Collectors.toList());

		return patientDtos;
	}

	@Override
	public List<PatientDto> getPatientsByWard(Integer wardId) {
		Ward ward = this.wardRepo.findById(wardId)
				.orElseThrow(() -> new ResourceNotFoundException("Ward ", "wardId ", wardId));
		List<Patient> patients = this.patientRepo.findByWard(ward);

		List<PatientDto> postDtos = patients.stream().map((patient) -> this.modelMapper.map(patient, PatientDto.class))
				.collect(Collectors.toList());

		return postDtos;
	}

	@Override
	public List<PatientDto> searchPatientById(String keyword) {
		List<Patient> patients = this.patientRepo.searchByPatientId("%" + keyword + "%");
		List<PatientDto> patientDtos = patients.stream()
				.map((patient) -> this.modelMapper.map(patients, PatientDto.class)).collect(Collectors.toList());
		return patientDtos;
	}

}
