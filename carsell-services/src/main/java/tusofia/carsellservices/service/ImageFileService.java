package tusofia.carsellservices.service;

import org.springframework.web.multipart.MultipartFile;

import tusofia.carsellservices.exceptions.FileTypeNotValidException;
import tusofia.carsellservices.model.ImageFile;

public interface ImageFileService {
	public ImageFile storeImage(MultipartFile image, Long announcementId) throws FileTypeNotValidException;
}
