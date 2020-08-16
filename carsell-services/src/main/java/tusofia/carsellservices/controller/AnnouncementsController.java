package tusofia.carsellservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tusofia.carsellservices.model.Announcement;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.model.dtos.AnnouncementCreateDTO;
import tusofia.carsellservices.service.AnnouncementService;
import tusofia.carsellservices.util.AnnouncementModelMapper;

@RestController
@RequestMapping(path = "announcements")
public class AnnouncementsController {

	private AnnouncementService announcementService;

	private AnnouncementModelMapper announcementModelMapper;

	@Autowired
	public AnnouncementsController(AnnouncementService announcementService,
			AnnouncementModelMapper announcementModelMapper) {
		this.announcementService = announcementService;
		this.announcementModelMapper = announcementModelMapper;
	}

	@RequestMapping(value = "/categories", method = RequestMethod.GET)
	public ResponseEntity<List<MainCategory>> getCategories() {
		List<MainCategory> categories = this.announcementService.getCategories();
		return new ResponseEntity<List<MainCategory>>(categories, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcement", method = RequestMethod.POST)
	public ResponseEntity<Long> createAnnouncement(@RequestBody AnnouncementCreateDTO announcementCreateDTO) {
		Announcement announcement = announcementModelMapper.convertToEntity(announcementCreateDTO);
		Long announcementId = this.announcementService.createAnnouncement(announcement);
		return new ResponseEntity<Long>(announcementId, HttpStatus.OK);
	}

}
