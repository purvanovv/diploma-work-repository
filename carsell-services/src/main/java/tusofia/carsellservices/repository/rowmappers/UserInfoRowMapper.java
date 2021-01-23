package tusofia.carsellservices.repository.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import tusofia.carsellservices.model.UserInfo;

public class UserInfoRowMapper implements RowMapper<UserInfo> {

	@Override
	public UserInfo mapRow(ResultSet rs, int rowNum) throws SQLException {
		return extractUserInfoFromResultSet(rs);
	}

	private UserInfo extractUserInfoFromResultSet(ResultSet rs) throws SQLException {
		UserInfo userInfo = new UserInfo();
		userInfo.setId(rs.getLong("ID"));
		userInfo.setEmail(rs.getString("EMAIL"));
		userInfo.setUsername(rs.getString("USERNAME"));
		userInfo.setFirstName(rs.getString("FIRST_NAME"));
		userInfo.setLastName(rs.getString("LAST_NAME"));
		userInfo.setTelephone(rs.getString("TELEPHONE"));
		userInfo.setUserId(rs.getLong("USER_ID"));
		userInfo.setImage(rs.getBytes("IMAGE"));
		return userInfo;
	}
}
