package tusofia.carsellservices.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.RowMapper;

public class RegionsRowMapper implements RowMapper<Map<String, List<String>>> {

	@Override
	public Map<String, List<String>> mapRow(ResultSet rs, int rowNum) throws SQLException {
		Map<String, List<String>> regions = new HashMap<String, List<String>>();
		while (rs.next()) {
			String region = rs.getString("REGION_NAME");
			String city = rs.getString("CITY_NAME");

			if (regions.containsKey(region)) {
				regions.get(region).add(city);
			} else {
				List<String> cities = new ArrayList<String>();
				cities.add(city);
				regions.put(region, cities);
			}
		}
		return regions;
	}

}
