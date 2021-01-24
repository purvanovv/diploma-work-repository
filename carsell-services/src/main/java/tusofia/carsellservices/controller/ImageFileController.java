package tusofia.carsellservices.controller;

import java.lang.invoke.MethodHandles;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import tusofia.carsellservices.exceptions.FileTypeNotValidException;
import tusofia.carsellservices.model.ImageFile;
import tusofia.carsellservices.model.ResponseMessage;
import tusofia.carsellservices.service.ImageFileService;

@RestController
@RequestMapping(path = "api")
public class ImageFileController {

	private ImageFileService imageFileService;

	private final Logger businessLog = LoggerFactory
			.getLogger("business." + MethodHandles.lookup().lookupClass().getCanonicalName());

	@Autowired
	public ImageFileController(ImageFileService imageFileService) {
		this.imageFileService = imageFileService;
	}

	@RequestMapping(value = "/announcements/upload", method = RequestMethod.POST)
	public ResponseEntity<ResponseMessage> uploadImage(@RequestParam("imageFile") MultipartFile file,
			@RequestParam Long announcementId) throws FileTypeNotValidException {

		businessLog.info("Calling uploadImage for announcementId={}", announcementId);
		imageFileService.storeImage(file, announcementId);
		String message = "Uploaded the file successfully: " + file.getOriginalFilename();
		businessLog.info("Call to uploadImage for announcementId={} completed", announcementId);
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(message), HttpStatus.OK);
	}

	@RequestMapping(value = "/auth/announcements/images", method = RequestMethod.GET)
	public ResponseEntity<List<ImageFile>> getImages(@RequestParam Long announcementId)
			throws FileTypeNotValidException {
		businessLog.info("Calling getImages for announcementId={}", announcementId);
		List<ImageFile> images = imageFileService.getImagesByAnnouncementId(announcementId);
		businessLog.info("Call to getImages for announcementId={} completed", announcementId);
		return new ResponseEntity<List<ImageFile>>(images, HttpStatus.OK);
	}

	@RequestMapping(value = "/announcements/images", method = RequestMethod.DELETE)
	public ResponseEntity<ResponseMessage> deleteAllImages(@RequestParam Long announcementId) {
		businessLog.info("Calling deleteAllImages for announcementId={}", announcementId);
		imageFileService.removeFilesByAnnouncementId(announcementId);
		String message = "Removed the files successfully";
		businessLog.info("Call to deleteAllImages for announcementId={} completed", announcementId);
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(message), HttpStatus.OK);
	}

}
