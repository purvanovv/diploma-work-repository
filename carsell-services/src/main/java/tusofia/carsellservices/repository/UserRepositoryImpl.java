package tusofia.carsellservices.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import tusofia.carsellservices.exceptions.DatabaseException;
import tusofia.carsellservices.model.User;
import tusofia.carsellservices.model.UserInfo;
import tusofia.carsellservices.repository.rowmappers.UserInfoRowMapper;
import tusofia.carsellservices.repository.rowmappers.UserRowMapper;
import tusofia.carsellservices.util.SqlContainer;

@Repository
public class UserRepositoryImpl implements UserRepository {

	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	public UserRepositoryImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
	}

	@Override
	public User getUserByUsername(String username) {
		try {
			String sql = SqlContainer.GET_USER_BY_USERNAME;
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("username", username);
			List<User> users = namedParameterJdbcTemplate.query(sql, params, new UserRowMapper());
			if (users != null && !users.isEmpty()) {
				return users.get(0);
			}
			return null;
		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}
	}

	@Override
	public UserInfo getUserInfoByUserId(Long userId) {
		try {
			String sql = SqlContainer.GET_USER_INFO_BY_USER_ID;
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("userId", userId);
			List<UserInfo> usersInfos = namedParameterJdbcTemplate.query(sql, params, new UserInfoRowMapper());
			if (usersInfos != null && !usersInfos.isEmpty()) {
				return usersInfos.get(0);
			}
			return null;
		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}
	}

	@Override
	public Long createUser(User user) {
		try {
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("username", user.getUsername());
			params.addValue("password", user.getPassword());
			KeyHolder keyHolder = new GeneratedKeyHolder();
			String sql = SqlContainer.CREATE_USER;
			namedParameterJdbcTemplate.update(sql, params, keyHolder, new String[] { "ID" });

			return keyHolder.getKey().longValue();

		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}
	}

	@Override
	public Long createUserInfo(UserInfo userInfo) {
		try {
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("email", userInfo.getEmail());
			params.addValue("firstName", userInfo.getFirstName());
			params.addValue("lastName", userInfo.getLastName());
			params.addValue("username", userInfo.getUsername());
			params.addValue("telephone", userInfo.getTelephone());
			params.addValue("userId", userInfo.getUserId());
			params.addValue("image", userInfo.getImage());
			params.addValue("id", userInfo.getId());
			KeyHolder keyHolder = new GeneratedKeyHolder();
			String sql = SqlContainer.CREATE_USER_INFO;
			namedParameterJdbcTemplate.update(sql, params, keyHolder, new String[] { "ID" });

			return keyHolder.getKey().longValue();

		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}
	}

	@Override
	public void updatePassword(String password, Long userId) {
		try {
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("password", password);
			params.addValue("userId", userId);
			String sql = SqlContainer.EDIT_PASSWORD;
			namedParameterJdbcTemplate.update(sql, params);
		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}

	}

	@Override
	public void updateUserInfo(UserInfo userInfo) {
		try {
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("email", userInfo.getEmail());
			params.addValue("firstName", userInfo.getFirstName());
			params.addValue("lastName", userInfo.getLastName());
			params.addValue("telephone", userInfo.getTelephone());
			params.addValue("userId", userInfo.getUserId());
			params.addValue("image", userInfo.getImage());
			String sql = SqlContainer.EDIT_USER_INFO;
			namedParameterJdbcTemplate.update(sql, params);
		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}
	}

}
