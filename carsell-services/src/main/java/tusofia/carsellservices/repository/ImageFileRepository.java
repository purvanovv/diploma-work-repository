package tusofia.carsellservices.repository;

import java.util.List;

import tusofia.carsellservices.model.ImageFile;

public interface ImageFileRepository {
	public ImageFile storeImage(ImageFile image);

	public List<ImageFile> getImagesByAnnouncementId(Long announcementId);

	public void removeFilesByAnnouncementId(Long announcementId);
}
