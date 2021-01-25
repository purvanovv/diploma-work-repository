package tusofia.carsellservices.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import oracle.ucp.util.Pair;
import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.CategoryPair;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.model.Make;
import tusofia.carsellservices.model.SubCategory;
import tusofia.carsellservices.model.UserInfo;
import tusofia.carsellservices.model.dtos.AnnouncementVehiclePreviewDTO;
import tusofia.carsellservices.model.dtos.AnnouncementVehicleSearchDTO;
import tusofia.carsellservices.repository.AnnouncementVehicleRepository;
import tusofia.carsellservices.repository.ImageFileRepository;
import tusofia.carsellservices.util.AnnouncementVehicleModelMapper;

@Service
@Transactional
public class AnnouncementVehicleServiceImpl implements AnnouncementVehicleService {

	private AnnouncementVehicleRepository announcementVehicleRepository;

	private ImageFileRepository imageFileRepository;

	private AnnouncementVehicleModelMapper announcementModelMapper;

	private UserService userService;

	@Autowired
	public AnnouncementVehicleServiceImpl(AnnouncementVehicleRepository announcementRepository,
			ImageFileRepository imageFileRepository, AnnouncementVehicleModelMapper announcementModelMapper,
			UserService userService) {
		this.announcementVehicleRepository = announcementRepository;
		this.imageFileRepository = imageFileRepository;
		this.announcementModelMapper = announcementModelMapper;
		this.userService = userService;
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
	public void removeAnnouncementById(Long announcementId) {
		this.imageFileRepository.removeFilesByAnnouncementId(announcementId);
		this.announcementVehicleRepository.removeAnnouncementById(announcementId);
	}

	@Override
	public AnnouncementVehiclePreviewDTO getAnnouncementVehiclePreview(Long announcementVehicleId) {
		AnnouncementVehicle announcementVehicle = getAnnouncementVehicle(announcementVehicleId);
		AnnouncementVehiclePreviewDTO announcementVehiclePreviewDTO = announcementModelMapper
				.convertToPreviewDTO(announcementVehicle);
		UserInfo userInfo = userService.getUserInfoByUserId(announcementVehicle.getUserId());
		announcementVehiclePreviewDTO.setUserInfo(userInfo);
		return announcementVehiclePreviewDTO;
	}

	@Override
	public List<AnnouncementVehiclePreviewDTO> getAnnouncementPreviewVehicles() {
		List<AnnouncementVehicle> announcementVehicles = getAnnouncementVehicles();
		List<AnnouncementVehiclePreviewDTO> announcementVehiclePreviewDTOs = new ArrayList<AnnouncementVehiclePreviewDTO>();
		for (AnnouncementVehicle announcementVehicle : announcementVehicles) {
			AnnouncementVehiclePreviewDTO announcementVehiclePreviewDTO = announcementModelMapper
					.convertToPreviewDTO(announcementVehicle);
			UserInfo userInfo = userService.getUserInfoByUserId(announcementVehicle.getUserId());
			announcementVehiclePreviewDTO.setUserInfo(userInfo);
			announcementVehiclePreviewDTOs.add(announcementVehiclePreviewDTO);
		}

		return announcementVehiclePreviewDTOs;
	}

}
