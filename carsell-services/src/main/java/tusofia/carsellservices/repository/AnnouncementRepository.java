package tusofia.carsellservices.repository;

import java.util.List;

import tusofia.carsellservices.model.Announcement;
import tusofia.carsellservices.model.MainCategory;

public interface AnnouncementRepository {
	public List<MainCategory> getCategories();

	public Long createAnnouncement(Announcement announcement);
}
