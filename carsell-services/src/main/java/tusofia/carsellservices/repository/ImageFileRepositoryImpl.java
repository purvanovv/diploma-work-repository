package tusofia.carsellservices.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import tusofia.carsellservices.model.ImageFile;
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
			return null;
		}
	}

}
