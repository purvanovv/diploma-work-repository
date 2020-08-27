package tusofia.carsellservices.repository;

import java.util.List;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.MainCategory;

public interface AnnouncementVehicleRepository {
	public List<MainCategory> getCategories();

	public Long createAnnouncementVehicle(AnnouncementVehicle announcementVehiclecement);

	public AnnouncementVehicle getAnnouncementVehicle(Long announcementVehicleId);

	public List<AnnouncementVehicle> getAnnouncementVehicles();

	public tusofia.carsellservices.model.enums.MainCategoryType getMainCategoryType(Long mainCategoryId);
}
