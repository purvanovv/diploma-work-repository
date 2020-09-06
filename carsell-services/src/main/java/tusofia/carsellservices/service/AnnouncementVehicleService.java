package tusofia.carsellservices.service;

import java.util.List;
import java.util.Map;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.model.Make;

public interface AnnouncementVehicleService {
	public List<MainCategory> getCategories();

	public Long createAnnouncementVehicle(AnnouncementVehicle announcementVehicle);

	public AnnouncementVehicle getAnnouncementVehicle(Long announcementVehicleId);

	public List<AnnouncementVehicle> getAnnouncementVehicles();

	public tusofia.carsellservices.model.enums.MainCategoryType getMainCategoryType(Long mainCategoryId);
	
	public Map<String, List<Make>> getMakesByMainCategory(Long mainCategoryId);
	
	public Map<String, List<String>> getRegions();
}
