package tusofia.carsellservices.repository;

import java.util.List;
import java.util.Map;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.model.Make;

public interface AnnouncementVehicleRepository {
	public List<MainCategory> getCategories();

	public Long createAnnouncementVehicle(AnnouncementVehicle announcementVehiclecement);

	public AnnouncementVehicle getAnnouncementVehicle(Long announcementVehicleId);

	public List<AnnouncementVehicle> getAnnouncementVehicles();

	public tusofia.carsellservices.model.enums.MainCategoryType getMainCategoryType(Long mainCategoryId);

	public Map<String, List<Make>> getMakesByMainCategory(Long mainCategoryId);
}
