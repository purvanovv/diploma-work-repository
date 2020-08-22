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

}
