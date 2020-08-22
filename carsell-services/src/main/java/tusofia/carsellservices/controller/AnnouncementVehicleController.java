package tusofia.carsellservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.model.dtos.AnnouncementVehicleCreateDTO;
import tusofia.carsellservices.service.AnnouncementVehicleService;
import tusofia.carsellservices.util.AnnouncementVehicleModelMapper;

@RestController
@RequestMapping(path = "announcements")
public class AnnouncementVehicleController {

	private AnnouncementVehicleService announcementVehicleService;

	private AnnouncementVehicleModelMapper announcementVehicleModelMapper;

	@Autowired
	public AnnouncementVehicleController(AnnouncementVehicleService announcementVehicleService,
			AnnouncementVehicleModelMapper announcementModelMapper) {
		this.announcementVehicleService = announcementVehicleService;
		this.announcementVehicleModelMapper = announcementModelMapper;
	}

	@RequestMapping(value = "/categories", method = RequestMethod.GET)
	public ResponseEntity<List<MainCategory>> getCategories() {
		List<MainCategory> categories = this.announcementVehicleService.getCategories();
		return new ResponseEntity<List<MainCategory>>(categories, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcement", method = RequestMethod.POST)
	public ResponseEntity<Long> createAnnouncement(
			@RequestBody AnnouncementVehicleCreateDTO announcementVehicleCreateDTO) {
		AnnouncementVehicle announcementVehicle = announcementVehicleModelMapper
				.convertToEntity(announcementVehicleCreateDTO);
		Long announcementVehicleId = this.announcementVehicleService.createAnnouncementVehicle(announcementVehicle);
		return new ResponseEntity<Long>(announcementVehicleId, HttpStatus.OK);
	}

}
