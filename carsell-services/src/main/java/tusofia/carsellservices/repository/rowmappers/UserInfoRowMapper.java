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
		userInfo.setFirstName(rs.getString("FIRSTNAME"));
		userInfo.setLastName(rs.getString("LASTNAME"));
		userInfo.setTelephone(rs.getString("TELEPHONE"));
		userInfo.setUserId(rs.getLong("USERID"));
		userInfo.setImage(rs.getBytes("IMAGE"));
		return userInfo;
	}
}
