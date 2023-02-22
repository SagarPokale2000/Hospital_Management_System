package com.hms.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.hms.entities.Doctor;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.DoctorDto;
import com.hms.repository.DoctorRepo;
import com.hms.services.DoctorService;

@Service
public class DoctorServiceImpl implements DoctorService {

	@Autowired
	private DoctorRepo doctorRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	@Override
	public DoctorDto createDoctor(DoctorDto doctorDto) {
		Doctor doc = this.modelMapper.map(doctorDto,Doctor.class);
		Doctor addedDoc = this.doctorRepo.save(doc);
		return this.modelMapper.map(addedDoc, DoctorDto.class);
	}

	@Override
	public DoctorDto updateDoctor(DoctorDto doctorDto, Integer doctorId) {
		Doctor doc = this.doctorRepo.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor ", "Doctor Id", doctorId));

		doc.setDoctorFee(doctorDto.getDoctorFee());
		doc.setStartTime(doctorDto.getStartTime());
		doc.setEndTime(doctorDto.getEndTime());
		

		Doctor updateddoc = this.doctorRepo.save(doc);

		return this.modelMapper.map(updateddoc, DoctorDto.class);
	}

	@Override
	public void deleteDoctor(Integer doctorId) {
		Doctor doc = this.doctorRepo.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor ", "doctor id", doctorId));
		this.doctorRepo.delete(doc);

	}

	@Override
	public DoctorDto getDoctor(Integer doctorId) {
		Doctor doc = this.doctorRepo.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor", "doctor id", doctorId));

		return this.modelMapper.map(doc, DoctorDto.class);
	}

	@Override
	public List<DoctorDto> getDoctor() {
		List<Doctor> doctors = this.doctorRepo.findAll();
		List<DoctorDto> docDtos = doctors.stream().map((doc) -> this.modelMapper.map(doc, DoctorDto.class))
				.collect(Collectors.toList());

		return docDtos;
	}

}
