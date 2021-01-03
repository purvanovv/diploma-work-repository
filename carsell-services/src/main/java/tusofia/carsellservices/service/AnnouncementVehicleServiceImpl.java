package tusofia.carsellservices.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import oracle.ucp.util.Pair;
import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.CategoryPair;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.model.Make;
import tusofia.carsellservices.model.SubCategory;
import tusofia.carsellservices.model.dtos.AnnouncementVehicleSearchDTO;
import tusofia.carsellservices.repository.AnnouncementVehicleRepository;
import tusofia.carsellservices.repository.ImageFileRepository;

@Service
public class AnnouncementVehicleServiceImpl implements AnnouncementVehicleService {

	private AnnouncementVehicleRepository announcementVehicleRepository;
	
	private ImageFileRepository imageFileRepository;

	@Autowired
	public AnnouncementVehicleServiceImpl(AnnouncementVehicleRepository announcementRepository,ImageFileRepository imageFileRepository) {
		this.announcementVehicleRepository = announcementRepository;
		this.imageFileRepository = imageFileRepository;
	}

	@Override
	public List<CategoryPair> getCategories() {
		return this.announcementVehicleRepository.getCategories();
	}

	@Override
	public Long createAnnouncementVehicle(AnnouncementVehicle announcementVehicle) {
		return announcementVehicleRepository.createAnnouncementVehicle(announcementVehicle);
	}

	@Override
	public AnnouncementVehicle getAnnouncementVehicle(Long announcementVehicleId) {
		return announcementVehicleRepository.getAnnouncementVehicle(announcementVehicleId);
	}

	@Override
	public List<AnnouncementVehicle> getAnnouncementVehicles() {
		return announcementVehicleRepository.getAnnouncementVehicles();
	}

	@Override
	public tusofia.carsellservices.model.enums.MainCategoryType getMainCategoryType(Long mainCategoryId) {
		return announcementVehicleRepository.getMainCategoryType(mainCategoryId);
	}

	@Override
	public Map<String, List<Make>> getMakesByMainCategory(Long mainCategoryId) {
		return announcementVehicleRepository.getMakesByMainCategory(mainCategoryId);
	}

	@Override
	public Map<String, List<String>> getRegions() {
		return announcementVehicleRepository.getRegions();
	}

	@Override
	public List<AnnouncementVehicle> getAnnouncementVehiclesBySearchQuery(AnnouncementVehicleSearchDTO searchModel) {
		return announcementVehicleRepository.getAnnouncementVehiclesBySearchQuery(searchModel);
	}

	@Override
	public Long editAnnouncementVehicle(AnnouncementVehicle announcementVehicle) {
		return announcementVehicleRepository.editAnnouncementVehicle(announcementVehicle);
	}
	
	@Override
	public void removeAnnouncementById(Long announcementId){
		this.imageFileRepository.removeFilesByAnnouncementId(announcementId);
		this.announcementVehicleRepository.removeAnnouncementById(announcementId);
	}

}
