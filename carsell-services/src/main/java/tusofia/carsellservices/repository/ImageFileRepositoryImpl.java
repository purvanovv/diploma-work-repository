package tusofia.carsellservices.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import tusofia.carsellservices.exceptions.DatabaseException;
import tusofia.carsellservices.model.ImageFile;
import tusofia.carsellservices.repository.rowmappers.ImageRowMapper;
import tusofia.carsellservices.repository.rsextractors.ImagesResultSetExtractor;
import tusofia.carsellservices.util.SqlContainer;

@Repository
public class ImageFileRepositoryImpl implements ImageFileRepository {

	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	public ImageFileRepositoryImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
	}

	@Override
	public ImageFile storeImage(ImageFile image) {
		try {
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("name", image.getName());
			params.addValue("dataType", image.getDataType());
			params.addValue("data", image.getData());
			params.addValue("announcementId", image.getAnnouncementId());
			KeyHolder keyHolder = new GeneratedKeyHolder();
			String sql = SqlContainer.CREATE_IMAGE_FILE;
			namedParameterJdbcTemplate.update(sql, params, keyHolder, new String[] { "ID" });

			image.setId(keyHolder.getKey().longValue());
			return image;
		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}
	}

	@Override
	public List<ImageFile> getImagesByAnnouncementId(Long announcementId) {
		try {
			String sql = SqlContainer.GET_IMAGE_FILES_BY_ANNOUNCEMENT_ID;
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("announcementId", announcementId);
			List<ImageFile> images = namedParameterJdbcTemplate.query(sql, params, new ImagesResultSetExtractor());
			return images;
		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}
	}

	@Override
	public void removeFilesByAnnouncementId(Long announcementId) {
		try {
			String sql = SqlContainer.DELETE_IMAGE_FILES_BY_ANNOUNCEMENT_ID;
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("announcementId", announcementId);
			namedParameterJdbcTemplate.update(sql, params);
		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}

	}

}
