package tusofia.carsellservices.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

import tusofia.carsellservices.model.AnnouncementVehicle;

public class AnnouncementVehiclesResultSetExtractor implements ResultSetExtractor<List<AnnouncementVehicle>> {

	@Override
	public List<AnnouncementVehicle> extractData(ResultSet rs) throws SQLException, DataAccessException {
		List<AnnouncementVehicle> announcementVehicles = new ArrayList<AnnouncementVehicle>();
		while (rs.next()) {
			AnnouncementVehicleRowMapper rowMapper = new AnnouncementVehicleRowMapper();
			AnnouncementVehicle announcementVehicle = rowMapper.mapRow(rs, 0);
			announcementVehicles.add(announcementVehicle);
		}
		return announcementVehicles;
	}

}
