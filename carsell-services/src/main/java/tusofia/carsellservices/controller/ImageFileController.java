package tusofia.carsellservices.controller;

import java.util.List;

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
@RequestMapping(path = "announcements")
public class ImageFileController {

	private ImageFileService imageFileService;

	@Autowired
	public ImageFileController(ImageFileService imageFileService) {
		this.imageFileService = imageFileService;
	}

	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	public ResponseEntity<ResponseMessage> uploadImage(@RequestParam("imageFile") MultipartFile file,
			@RequestParam Long announcementId) throws FileTypeNotValidException {

		imageFileService.storeImage(file, announcementId);
		String message = "Uploaded the file successfully: " + file.getOriginalFilename();
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(message), HttpStatus.OK);
	}

	@RequestMapping(value = "/images", method = RequestMethod.GET)
	public ResponseEntity<List<ImageFile>> getImages(@RequestParam Long announcementId)
			throws FileTypeNotValidException {

		List<ImageFile> images = imageFileService.getImagesByAnnouncementId(announcementId);
		return new ResponseEntity<List<ImageFile>>(images, HttpStatus.OK);
	}

	@RequestMapping(value = "/images", method = RequestMethod.DELETE)
	public ResponseEntity<ResponseMessage> deleteAllImages(@RequestParam Long announcementId) {
		imageFileService.removeFilesByAnnouncementId(announcementId);
		String message = "Removed the files successfully";
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(message), HttpStatus.OK);
	}

}
