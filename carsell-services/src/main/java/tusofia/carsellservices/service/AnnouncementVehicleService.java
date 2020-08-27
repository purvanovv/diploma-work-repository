package tusofia.carsellservices.service;

import java.util.List;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.MainCategory;

public interface AnnouncementVehicleService {
	public List<MainCategory> getCategories();

	public Long createAnnouncementVehicle(AnnouncementVehicle announcementVehicle);

	public AnnouncementVehicle getAnnouncementVehicle(Long announcementVehicleId);

	public List<AnnouncementVehicle> getAnnouncementVehicles();

	public tusofia.carsellservices.model.enums.MainCategoryType getMainCategoryType(Long mainCategoryId);
}
