package tusofia.carsellservices.controller;

import java.lang.invoke.MethodHandles;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tusofia.carsellservices.exceptions.ValidationException;
import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.CategoryPair;
import tusofia.carsellservices.model.Make;
import tusofia.carsellservices.model.ResponseMessage;
import tusofia.carsellservices.model.dtos.AnnouncementVehicleCreateDTO;
import tusofia.carsellservices.model.dtos.AnnouncementVehiclePreviewDTO;
import tusofia.carsellservices.model.dtos.AnnouncementVehicleSearchDTO;
import tusofia.carsellservices.model.enums.MainCategoryType;
import tusofia.carsellservices.service.AnnouncementVehicleService;
import tusofia.carsellservices.util.AnnouncementVehicleModelMapper;
import tusofia.carsellservices.validation.AnnouncementVehicleValidationContext;
import tusofia.carsellservices.validation.AnnouncementVehicleValidationContextBuilder;
import tusofia.carsellservices.validation.ValidationResult;

@RestController
@RequestMapping(path = "announcements")
public class AnnouncementVehicleController {

	private AnnouncementVehicleService announcementVehicleService;

	private AnnouncementVehicleModelMapper announcementVehicleModelMapper;

	private final Logger businessLog = LoggerFactory
			.getLogger("business." + MethodHandles.lookup().lookupClass().getCanonicalName());

	@Autowired
	public AnnouncementVehicleController(AnnouncementVehicleService announcementVehicleService,
			AnnouncementVehicleModelMapper announcementModelMapper) {
		this.announcementVehicleService = announcementVehicleService;
		this.announcementVehicleModelMapper = announcementModelMapper;
	}

	@RequestMapping(value = "/categories", method = RequestMethod.GET)
	public ResponseEntity<List<CategoryPair>> getCategories() {
		businessLog.info("Calling getCategories");
		List<CategoryPair> categories = this.announcementVehicleService.getCategories();
		return new ResponseEntity<List<CategoryPair>>(categories, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcement", method = RequestMethod.POST)
	public ResponseEntity<Long> createAnnouncement(
			@RequestBody AnnouncementVehicleCreateDTO announcementVehicleCreateDTO) throws ValidationException {

		businessLog.info("Calling createAnnouncement");
		MainCategoryType mainCategoryType = announcementVehicleService
				.getMainCategoryType(announcementVehicleCreateDTO.getMainCategoryId());
		AnnouncementVehicleValidationContext validationContext = AnnouncementVehicleValidationContextBuilder
				.build(mainCategoryType);
		List<ValidationResult> validationErrors = validationContext.executeAndGetList(announcementVehicleCreateDTO);
		if (!validationErrors.isEmpty()) {
			throw new ValidationException(validationErrors);
		}

		AnnouncementVehicle announcementVehicle = announcementVehicleModelMapper
				.convertToEntity(announcementVehicleCreateDTO);
		Long announcementVehicleId = this.announcementVehicleService.createAnnouncementVehicle(announcementVehicle);
		businessLog.info("Call to createAnnouncement completed");
		return new ResponseEntity<Long>(announcementVehicleId, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcement", method = RequestMethod.PUT)
	public ResponseEntity<Long> editAnnouncement(@RequestBody AnnouncementVehicleCreateDTO announcementVehicleCreateDTO)
			throws ValidationException {

		businessLog.info("Calling editAnnouncement for announcementId={}", announcementVehicleCreateDTO.getId());
		MainCategoryType mainCategoryType = announcementVehicleService
				.getMainCategoryType(announcementVehicleCreateDTO.getMainCategoryId());
		AnnouncementVehicleValidationContext validationContext = AnnouncementVehicleValidationContextBuilder
				.build(mainCategoryType);
		List<ValidationResult> validationErrors = validationContext.executeAndGetList(announcementVehicleCreateDTO);
		if (!validationErrors.isEmpty()) {
			throw new ValidationException(validationErrors);
		}

		AnnouncementVehicle announcementVehicle = announcementVehicleModelMapper
				.convertToEntity(announcementVehicleCreateDTO);
		Long announcementVehicleId = this.announcementVehicleService.editAnnouncementVehicle(announcementVehicle);
		businessLog.info("Call to editAnnouncement for announcementId={} completed",
				announcementVehicleCreateDTO.getId());
		return new ResponseEntity<Long>(announcementVehicleId, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcement", method = RequestMethod.DELETE)
	public ResponseEntity<ResponseMessage> removeAnnouncementById(@RequestParam Long announcementId) {
		businessLog.info("Calling removeAnnouncementById for announcementId={}", announcementId);
		announcementVehicleService.removeAnnouncementById(announcementId);
		ResponseMessage message = new ResponseMessage("Announcement deleted successfully");
		businessLog.info("Call to removeAnnouncementById for announcementId={} completed", announcementId);
		return new ResponseEntity<ResponseMessage>(message, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcement", method = RequestMethod.GET)
	public ResponseEntity<AnnouncementVehicleCreateDTO> getAnnouncementVehicle(
			@RequestParam Long announcementVehicleId) {
		businessLog.info("Calling getAnnouncementVehicle for announcementId={}", announcementVehicleId);
		AnnouncementVehicle announcementVehicle = announcementVehicleService
				.getAnnouncementVehicle(announcementVehicleId);
		AnnouncementVehicleCreateDTO announcementVehicleCreateDTO = announcementVehicleModelMapper
				.convertToCreateDTO(announcementVehicle);
		businessLog.info("Call to getAnnouncementVehicle for announcementId={} completed", announcementVehicleId);
		return new ResponseEntity<AnnouncementVehicleCreateDTO>(announcementVehicleCreateDTO, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcementPreview", method = RequestMethod.GET)
	public ResponseEntity<AnnouncementVehiclePreviewDTO> getAnnouncementVehiclePreview(
			@RequestParam Long announcementVehicleId) {
		businessLog.info("Calling getAnnouncementVehiclePreview for announcementId={}", announcementVehicleId);
		AnnouncementVehicle announcementVehicle = announcementVehicleService
				.getAnnouncementVehicle(announcementVehicleId);
		AnnouncementVehiclePreviewDTO announcementVehiclePreviewDTO = announcementVehicleModelMapper
				.convertToPreviewDTO(announcementVehicle);
		businessLog.info("Call to getAnnouncementVehiclePreview for announcementId={} completed",
				announcementVehicleId);
		return new ResponseEntity<AnnouncementVehiclePreviewDTO>(announcementVehiclePreviewDTO, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcements", method = RequestMethod.GET)
	public ResponseEntity<List<AnnouncementVehiclePreviewDTO>> getAnnouncementVehicles() {
		businessLog.info("Calling getAnnouncementVehicles");
		List<AnnouncementVehicle> announcementVehicles = this.announcementVehicleService.getAnnouncementVehicles();
		List<AnnouncementVehiclePreviewDTO> announcementVehicleCreateDTOs = announcementVehicleModelMapper
				.convertToPreviewDTOs(announcementVehicles);
		businessLog.info("Call to getAnnouncementVehicles completed");
		return new ResponseEntity<List<AnnouncementVehiclePreviewDTO>>(announcementVehicleCreateDTOs, HttpStatus.OK);
	}

	@RequestMapping(value = "/search", method = RequestMethod.POST)
	public ResponseEntity<List<AnnouncementVehiclePreviewDTO>> getAnnouncementVehicles(
			@RequestBody AnnouncementVehicleSearchDTO searchData) {
		businessLog.info("Calling getAnnouncementVehicles for search");
		List<AnnouncementVehicle> announcementVehicles = this.announcementVehicleService
				.getAnnouncementVehiclesBySearchQuery(searchData);
		List<AnnouncementVehiclePreviewDTO> announcementVehiclePreviewDTOs = announcementVehicleModelMapper
				.convertToPreviewDTOs(announcementVehicles);
		businessLog.info("Call to getAnnouncementVehicles for search completed");
		return new ResponseEntity<List<AnnouncementVehiclePreviewDTO>>(announcementVehiclePreviewDTOs, HttpStatus.OK);
	}

	@RequestMapping(value = "/groupmakes", method = RequestMethod.GET)
	public ResponseEntity<Map<String, List<Make>>> getMakesByMainCategory(@RequestParam Long mainCategoryId) {
		businessLog.info("Calling getMakesByMainCategory for mainCategoryId={}", mainCategoryId);
		Map<String, List<Make>> groupMakes = announcementVehicleService.getMakesByMainCategory(mainCategoryId);
		businessLog.info("Call to getMakesByMainCategory for mainCategoryId={} completed", mainCategoryId);
		return new ResponseEntity<Map<String, List<Make>>>(groupMakes, HttpStatus.OK);
	}

	@RequestMapping(value = "/regions", method = RequestMethod.GET)
	public ResponseEntity<Map<String, List<String>>> getRegions() {
		businessLog.info("Calling getRegions");
		Map<String, List<String>> regions = announcementVehicleService.getRegions();
		businessLog.info("Calling to getRegions completed");
		return new ResponseEntity<Map<String, List<String>>>(regions, HttpStatus.OK);
	}

}
