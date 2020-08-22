package tusofia.carsellservices.service;

import java.util.List;

import tusofia.carsellservices.model.Announcement;
import tusofia.carsellservices.model.MainCategory;

public interface AnnouncementService {
	public List<MainCategory> getCategories();

	public Long createAnnouncement(Announcement announcement);
}
