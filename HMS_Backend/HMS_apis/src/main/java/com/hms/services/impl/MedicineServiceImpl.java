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
import com.hms.entities.Medicine;
import com.hms.exceptions.ResourceNotFoundException;
import com.hms.payloads.MedicineDto;
import com.hms.payloads.MedicineResponse;
import com.hms.repository.HealthHistoryRepo;
import com.hms.repository.MedicineRepo;
import com.hms.services.MedicineService;

@Service
public class MedicineServiceImpl implements MedicineService {

	@Autowired
	private MedicineRepo medicineRepo;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private HealthHistoryRepo healthRepo;

	@Override
	public MedicineDto createMedicine(MedicineDto medicineDto, Integer healthId) {
		Health_History health = this.healthRepo.findById(healthId)
				.orElseThrow(() -> new ResourceNotFoundException("HealthHistory ", "Health id", healthId));

		Medicine medicine = this.modelMapper.map(medicineDto, Medicine.class);

		medicine.setHealthHistory(health);

		Medicine newMedicine = this.medicineRepo.save(medicine);

		return this.modelMapper.map(newMedicine, MedicineDto.class);
	}

	@Override
	public MedicineDto updateMedicine(MedicineDto medicineDto, Integer medicineId) {
		Medicine medicine = this.medicineRepo.findById(medicineId)
				.orElseThrow(() -> new ResourceNotFoundException("Medicine ", "medicine id", medicineId));

		Health_History health = this.healthRepo.findById(medicineDto.getHealthHistory().getHealthId()).get();

		medicine.setMedicineName(medicineDto.getMedicineName());
		medicine.setDuration(medicineDto.getDuration());
		medicine.setQuantity(medicineDto.getQuantity());
		medicine.setMedicineCharges(medicineDto.getMedicineCharges());

		medicine.setHealthHistory(health);

		Medicine updatedMedicine = this.medicineRepo.save(medicine);
		return this.modelMapper.map(updatedMedicine, MedicineDto.class);
	}

	@Override
	public void deleteMedicine(Integer medicineId) {
		Medicine medicine = this.medicineRepo.findById(medicineId)
				.orElseThrow(() -> new ResourceNotFoundException("Medicine ", "medicine id", medicineId));

		this.medicineRepo.delete(medicine);
	}

	@Override
	public MedicineResponse getAllMedicine(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {
		Sort sort = (sortDir.equalsIgnoreCase("asc")) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();

		Pageable p = PageRequest.of(pageNumber, pageSize, sort);

		Page<Medicine> pageMedicine = this.medicineRepo.findAll(p);

		List<Medicine> allMedicines = pageMedicine.getContent();

		List<MedicineDto> medicineDtos = allMedicines.stream()
				.map((medicine) -> this.modelMapper.map(medicine, MedicineDto.class)).collect(Collectors.toList());

		MedicineResponse medicineResponse = new MedicineResponse();

		medicineResponse.setContent(medicineDtos);
		medicineResponse.setPageNumber(pageMedicine.getNumber());
		medicineResponse.setPageSize(pageMedicine.getSize());
		medicineResponse.setTotalElements(pageMedicine.getTotalElements());

		medicineResponse.setTotalPages(pageMedicine.getTotalPages());
		medicineResponse.setLastPage(pageMedicine.isLast());

		return medicineResponse;
	}

	@Override
	public MedicineDto getMedicineById(Integer medicineId) {
		Medicine medicine = this.medicineRepo.findById(medicineId)
				.orElseThrow(() -> new ResourceNotFoundException("Medicine", "medicine id", medicineId));
		return this.modelMapper.map(medicine, MedicineDto.class);
	}

	@Override
	public List<MedicineDto> getMedicineByHealthHistory(Integer healthId) {
		Health_History healthi = this.healthRepo.findById(healthId)
				.orElseThrow(() -> new ResourceNotFoundException("HealthHistory", "health id", healthId));
		List<Medicine> medicines = this.medicineRepo.findByHealthHistory(healthi);

		List<MedicineDto> medicineDtos = medicines.stream()
				.map((medicine) -> this.modelMapper.map(medicine, MedicineDto.class)).collect(Collectors.toList());

		return medicineDtos;
	}

	@Override
	public List<MedicineDto> searchMedicine(String keyword) {
		List<Medicine> medicines = this.medicineRepo.searchByMedicineId("%" + keyword + "%");
		List<MedicineDto> medicineDtos = medicines.stream()
				.map((medicine) -> this.modelMapper.map(medicine, MedicineDto.class)).collect(Collectors.toList());
		return medicineDtos;
	}
}
