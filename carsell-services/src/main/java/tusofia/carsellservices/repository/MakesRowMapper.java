package tusofia.carsellservices.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.RowMapper;

import tusofia.carsellservices.model.Make;

public class MakesRowMapper implements RowMapper<Map<String, List<Make>>> {

	@Override
	public Map<String, List<Make>> mapRow(ResultSet rs, int rowNum) throws SQLException {
		Map<String, List<Make>> groupMakes = new HashMap<String, List<Make>>();
		while (rs.next()) {
			String groupName = rs.getString("GROUP_NAME");
			Make currMake = extractMakeFromResultSet(rs);
			if (groupMakes.containsKey(groupName)) {
				Make make = findMake(currMake.getId(), groupMakes.get(groupName));
				if (null == make) {
					groupMakes.get(groupName).add(currMake);
				} else {
					make.addModel(rs.getString("MODEL"));
				}
			} else {
				List<Make> makes = new ArrayList<Make>();
				makes.add(currMake);
				groupMakes.put(groupName, makes);
			}
		}
		return groupMakes;
	}

	private Make extractMakeFromResultSet(ResultSet rs) throws SQLException {
		Make make = new Make();
		make.setId(rs.getLong("ID"));
		make.setMainCategoryId(rs.getLong("MAIN_CATEGORY_ID"));
		make.setMake(rs.getString("MAKE"));
		make.addModel(rs.getString("MODEL"));
		return make;
	}

	private Make findMake(Long makeId, List<Make> makes) {
		return makes.stream().filter(m -> m.getId().equals(makeId)).findAny().orElse(null);
	}

}
