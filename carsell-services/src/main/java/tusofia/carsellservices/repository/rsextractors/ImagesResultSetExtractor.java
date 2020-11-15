package tusofia.carsellservices.repository.rsextractors;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

import tusofia.carsellservices.model.ImageFile;
import tusofia.carsellservices.repository.rowmappers.ImageRowMapper;

public class ImagesResultSetExtractor  implements ResultSetExtractor<List<ImageFile>> {

	@Override
	public List<ImageFile> extractData(ResultSet rs) throws SQLException, DataAccessException {
		List<ImageFile> images = new ArrayList<ImageFile>();
		ImageRowMapper imageRowMapper = new ImageRowMapper();
		while (rs.next()) {
			ImageFile imageFile = imageRowMapper.mapRow(rs, 0);
			images.add(imageFile);
		}
		return images;
	}

}
