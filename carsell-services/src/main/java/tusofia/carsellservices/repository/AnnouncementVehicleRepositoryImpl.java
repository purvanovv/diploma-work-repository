package tusofia.carsellservices.repository;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import tusofia.carsellservices.model.Announcement;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.util.DateUtils;
import tusofia.carsellservices.util.SqlContainer;
import tusofia.carsellservices.util.SqlUtils;

@Repository
public class AnnouncementRepositoryImpl implements AnnouncementRepository {

	NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	public AnnouncementRepositoryImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
	}

	@Override
	public List<MainCategory> getCategories() {
		try {
			String sql = SqlContainer.GET_CATEGORIES;
			List<MainCategory> categories = namedParameterJdbcTemplate.getJdbcTemplate().queryForObject(sql, null,
					new CategoriesRowMapper());
			return categories;
		} catch (Exception e) {
			// TODO
			return null;
		}
	}

	@Override
	public Long createAnnouncement(Announcement announcement) {
		try {
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("mainCategoryId", announcement.getMainCategoryId());
			params.addValue("brand", announcement.getBrand());
			params.addValue("model", announcement.getModel());
			params.addValue("engineType", announcement.getEngineType());
			params.addValue("condition", announcement.getCondition());
			params.addValue("horsePower", announcement.getHorsePower());
			params.addValue("gearboxType", announcement.getGearboxType());
			params.addValue("subCategoryId", announcement.getSubCategoryId());
			params.addValue("cubature", announcement.getCubature());
			params.addValue("coolingType", announcement.getCoolingType());
			params.addValue("engineCategory", announcement.getEngineCategory());
			params.addValue("price", announcement.getPrice());
			params.addValue("currency", announcement.getCurrency().getValue());
			params.addValue("dateOfManufacture", DateUtils.getSubmissionDate(announcement.getDateOfManufacture()));
			params.addValue("mileage", announcement.getMileage());
			params.addValue("color", announcement.getColor());
			params.addValue("region", announcement.getRegion());
			params.addValue("city", announcement.getCity());
			params.addValue("validDays", announcement.getValidDays());
			params.addValue("adValidFrom", DateUtils.getSubmissionDate(announcement.getAdValidFrom()));
			Date validTo = DateUtils.addDays(announcement.getAdValidFrom(), announcement.getValidDays());
			params.addValue("adValidTo", DateUtils.getSubmissionDate(validTo));
			params.addValue("description", announcement.getDescription());
			params.addValue("createdBy", announcement.getMetaProps().getCreatedBy());
			params.addValue("createdOn", DateUtils.getSubmissionDate(announcement.getMetaProps().getCreatedOn()));
			params.addValue("deleteFlag", SqlUtils.getSubmissionBoolean(announcement.getMetaProps().getDeleteFlag()));

			KeyHolder keyHolder = new GeneratedKeyHolder();
			String sql = SqlContainer.CREATE_ANNOUNCEMENT;
			namedParameterJdbcTemplate.update(sql, params, keyHolder, new String[] { "ID" });

			return keyHolder.getKey().longValue();

		} catch (Exception e) {
			// TODO
			return null;
		}
	}

}