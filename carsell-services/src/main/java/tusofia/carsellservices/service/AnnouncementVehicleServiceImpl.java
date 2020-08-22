package tusofia.carsellservices.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tusofia.carsellservices.model.Announcement;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.repository.AnnouncementRepository;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {

	private AnnouncementRepository announcementRepository;

	@Autowired
	public AnnouncementServiceImpl(AnnouncementRepository announcementRepository) {
		this.announcementRepository = announcementRepository;
	}

	@Override
	public List<MainCategory> getCategories() {
		return this.announcementRepository.getCategories();
	}

	@Override
	public Long createAnnouncement(Announcement announcement) {
		return announcementRepository.createAnnouncement(announcement);
	}

}
