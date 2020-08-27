package tusofia.carsellservices.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.repository.AnnouncementVehicleRepository;

@Service
public class AnnouncementVehicleServiceImpl implements AnnouncementVehicleService {

	private AnnouncementVehicleRepository announcementVehicleRepository;

	@Autowired
	public AnnouncementVehicleServiceImpl(AnnouncementVehicleRepository announcementRepository) {
		this.announcementVehicleRepository = announcementRepository;
	}

	@Override
	public List<MainCategory> getCategories() {
		return this.announcementVehicleRepository.getCategories();
	}

	@Override
	public Long createAnnouncementVehicle(AnnouncementVehicle announcementVehicle) {
		return announcementVehicleRepository.createAnnouncementVehicle(announcementVehicle);
	}

	@Override
	public AnnouncementVehicle getAnnouncementVehicle(Long announcementVehicleId) {
		return announcementVehicleRepository.getAnnouncementVehicle(announcementVehicleId);
	}

	@Override
	public List<AnnouncementVehicle> getAnnouncementVehicles() {
		return announcementVehicleRepository.getAnnouncementVehicles();
	}

	@Override
	public tusofia.carsellservices.model.enums.MainCategoryType getMainCategoryType(Long mainCategoryId) {
		return announcementVehicleRepository.getMainCategoryType(mainCategoryId);
	}

}
