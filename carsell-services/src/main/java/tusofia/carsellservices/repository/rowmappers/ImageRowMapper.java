package tusofia.carsellservices.repository.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Base64;

import org.springframework.jdbc.core.RowMapper;

import tusofia.carsellservices.model.ImageFile;

public class ImageRowMapper implements RowMapper<ImageFile> {

	@Override
	public ImageFile mapRow(ResultSet rs, int rowNum) throws SQLException {
		return extractImageFileFromResultSet(rs);
	}

	private ImageFile extractImageFileFromResultSet(ResultSet rs) throws SQLException {
		ImageFile imageFile = new ImageFile();
		imageFile.setAnnouncementId(rs.getLong("ANNOUNCEMENT_ID"));
		imageFile.setId(rs.getLong("ID"));
		imageFile.setName(rs.getString("NAME"));
		imageFile.setDataType(rs.getString("TYPE"));
		imageFile.setData(rs.getBytes("DATA"));
		imageFile.setEncodedImage(Base64.getEncoder().encodeToString(rs.getBytes("DATA")));
		return imageFile;

	}

}
