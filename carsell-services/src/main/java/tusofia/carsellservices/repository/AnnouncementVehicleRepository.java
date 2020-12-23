package tusofia.carsellservices.repository;

import java.util.List;
import java.util.Map;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.CategoryPair;
import tusofia.carsellservices.model.Make;
import tusofia.carsellservices.model.dtos.AnnouncementVehicleSearchDTO;

public interface AnnouncementVehicleRepository {
	public List<CategoryPair> getCategories();

	public Long createAnnouncementVehicle(AnnouncementVehicle announcementVehiclecement);

	public AnnouncementVehicle getAnnouncementVehicle(Long announcementVehicleId);

	public List<AnnouncementVehicle> getAnnouncementVehicles();

	public tusofia.carsellservices.model.enums.MainCategoryType getMainCategoryType(Long mainCategoryId);

	public Map<String, List<Make>> getMakesByMainCategory(Long mainCategoryId);

	public Map<String, List<String>> getRegions();

	public List<AnnouncementVehicle> getAnnouncementVehiclesBySearchQuery(AnnouncementVehicleSearchDTO searchModel);
	
	public Long editAnnouncementVehicle(AnnouncementVehicle announcementVehiclecement);
}
