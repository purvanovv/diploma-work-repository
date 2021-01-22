package tusofia.carsellservices.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import tusofia.carsellservices.exceptions.FailToStoreImageException;
import tusofia.carsellservices.exceptions.FileTypeNotValidException;
import tusofia.carsellservices.model.ImageFile;
import tusofia.carsellservices.repository.ImageFileRepository;
import tusofia.carsellservices.util.Constants;

@Service
@Transactional
public class ImageFileServiceImpl implements ImageFileService {

	private ImageFileRepository imageFileRepository;

	@Autowired
	public ImageFileServiceImpl(ImageFileRepository imageFileRepository) {
		this.imageFileRepository = imageFileRepository;
	}

	@Override
	public ImageFile storeImage(MultipartFile image, Long announcementId) throws FileTypeNotValidException {
		if (!isAvailableType(image.getContentType())) {
			throw new FileTypeNotValidException(
					"File type is not valid " + image.getContentType() + ". Allowed types are: "
							+ tusofia.carsellservices.util.StringUtils.toString(Constants.availableImageFileTypes),
					(short) 501);
		}

		try {
			String fileName = StringUtils.cleanPath(image.getOriginalFilename());
			ImageFile imageFile = new ImageFile(fileName, image.getContentType(), image.getBytes(), announcementId);
			return imageFileRepository.storeImage(imageFile);
		} catch (IOException e) {
			throw new FailToStoreImageException("Could not upload the file: " + image.getName(), e);
		}

	}

	@Override
	public List<ImageFile> getImagesByAnnouncementId(Long announcementId) {
		return this.imageFileRepository.getImagesByAnnouncementId(announcementId);
	}

	private boolean isAvailableType(String fileType) {
		return fileType != null && Constants.availableImageFileTypes.contains(fileType);
	}

	@Override
	public void removeFilesByAnnouncementId(Long announcementId) {
		this.imageFileRepository.removeFilesByAnnouncementId(announcementId);
	}

}
