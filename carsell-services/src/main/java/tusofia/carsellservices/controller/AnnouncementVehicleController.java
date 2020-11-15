package tusofia.carsellservices.controller;

import java.util.List;
import java.util.Map;

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
import tusofia.carsellservices.model.dtos.AnnouncementVehicleCreateDTO;
import tusofia.carsellservices.model.dtos.AnnouncementVehiclePreviewDTO;
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

	@Autowired
	public AnnouncementVehicleController(AnnouncementVehicleService announcementVehicleService,
			AnnouncementVehicleModelMapper announcementModelMapper) {
		this.announcementVehicleService = announcementVehicleService;
		this.announcementVehicleModelMapper = announcementModelMapper;
	}

	@RequestMapping(value = "/categories", method = RequestMethod.GET)
	public ResponseEntity<List<CategoryPair>> getCategories() {
		List<CategoryPair> categories = this.announcementVehicleService.getCategories();
		return new ResponseEntity<List<CategoryPair>>(categories, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcement", method = RequestMethod.POST)
	public ResponseEntity<Long> createAnnouncement(
			@RequestBody AnnouncementVehicleCreateDTO announcementVehicleCreateDTO) throws ValidationException {

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
		return new ResponseEntity<Long>(announcementVehicleId, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcement", method = RequestMethod.GET)
	public ResponseEntity<AnnouncementVehicleCreateDTO> getAnnouncementVehicle(
			@RequestParam Long announcementVehicleId) {
		AnnouncementVehicle announcementVehicle = announcementVehicleService
				.getAnnouncementVehicle(announcementVehicleId);
		AnnouncementVehicleCreateDTO announcementVehicleCreateDTO = announcementVehicleModelMapper
				.convertToCreateDTO(announcementVehicle);
		return new ResponseEntity<AnnouncementVehicleCreateDTO>(announcementVehicleCreateDTO, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcementPreview", method = RequestMethod.GET)
	public ResponseEntity<AnnouncementVehiclePreviewDTO> getAnnouncementVehiclePreview(
			@RequestParam Long announcementVehicleId) {
		AnnouncementVehicle announcementVehicle = announcementVehicleService
				.getAnnouncementVehicle(announcementVehicleId);
		AnnouncementVehiclePreviewDTO announcementVehiclePreviewDTO = announcementVehicleModelMapper
				.convertToPreviewDTO(announcementVehicle);
		return new ResponseEntity<AnnouncementVehiclePreviewDTO>(announcementVehiclePreviewDTO, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcements", method = RequestMethod.GET)
	public ResponseEntity<List<AnnouncementVehicleCreateDTO>> getAnnouncementVehicles() {
		List<AnnouncementVehicle> announcementVehicles = this.announcementVehicleService.getAnnouncementVehicles();
		List<AnnouncementVehicleCreateDTO> announcementVehicleCreateDTOs = announcementVehicleModelMapper
				.convertToCreateDTOs(announcementVehicles);
		return new ResponseEntity<List<AnnouncementVehicleCreateDTO>>(announcementVehicleCreateDTOs, HttpStatus.OK);
	}

	@RequestMapping(value = "/groupmakes", method = RequestMethod.GET)
	public ResponseEntity<Map<String, List<Make>>> getMakesByMainCategory(@RequestParam Long mainCategoryId) {
		Map<String, List<Make>> groupMakes = announcementVehicleService.getMakesByMainCategory(mainCategoryId);
		return new ResponseEntity<Map<String, List<Make>>>(groupMakes, HttpStatus.OK);
	}

	@RequestMapping(value = "/regions", method = RequestMethod.GET)
	public ResponseEntity<Map<String, List<String>>> getRegions() {
		Map<String, List<String>> regions = announcementVehicleService.getRegions();
		return new ResponseEntity<Map<String, List<String>>>(regions, HttpStatus.OK);
	}

}
