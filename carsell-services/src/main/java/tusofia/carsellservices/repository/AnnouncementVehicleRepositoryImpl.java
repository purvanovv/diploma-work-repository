package tusofia.carsellservices.repository;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.util.DateUtils;
import tusofia.carsellservices.util.SqlContainer;
import tusofia.carsellservices.util.SqlUtils;

@Repository
public class AnnouncementVehicleRepositoryImpl implements AnnouncementVehicleRepository {

	NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	public AnnouncementVehicleRepositoryImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
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
	public Long createAnnouncementVehicle(AnnouncementVehicle announcementVehicle) {
		try {
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("mainCategoryId", announcementVehicle.getMainCategoryId());
			params.addValue("brand", announcementVehicle.getBrand());
			params.addValue("model", announcementVehicle.getModel());
			params.addValue("engineType", announcementVehicle.getEngineType().getValue());
			params.addValue("conditionType", announcementVehicle.getConditionType().getValue());
			params.addValue("horsePower", announcementVehicle.getHorsePower());
			params.addValue("emissionStandartType", announcementVehicle.getEmissionStandartType().getValue());
			params.addValue("gearboxType", announcementVehicle.getGearboxType().getValue());
			params.addValue("subCategoryId", announcementVehicle.getSubCategoryId());
			params.addValue("coolingType", announcementVehicle.getCoolingType().getValue());
			params.addValue("cubature", announcementVehicle.getCubature());
			params.addValue("engineCategoryType", announcementVehicle.getEngineCategoryType().getValue());
			params.addValue("price", announcementVehicle.getPrice());
			params.addValue("currency", announcementVehicle.getCurrency().getValue());
			params.addValue("dateOfManufacture",
					DateUtils.getSubmissionDate(announcementVehicle.getDateOfManufacture()));
			params.addValue("mileage", announcementVehicle.getMileage());
			params.addValue("color", announcementVehicle.getColor());
			params.addValue("region", announcementVehicle.getRegion());
			params.addValue("city", announcementVehicle.getCity());
			params.addValue("validDays", announcementVehicle.getValidDays());
			params.addValue("validFrom", DateUtils.getSubmissionDate(announcementVehicle.getValidFrom()));
			Date validTo = DateUtils.addDays(announcementVehicle.getValidFrom(), announcementVehicle.getValidDays());
			params.addValue("validTo", DateUtils.getSubmissionDate(validTo));
			params.addValue("numberOfAxels", announcementVehicle.getNumberOfAxels());
			params.addValue("numberOfSeats", announcementVehicle.getNumberOfSeats());
			params.addValue("weightCapacity", announcementVehicle.getWeightCapacity());
			params.addValue("engineCategoryType", announcementVehicle.getEngineCategoryType().getValue());
			params.addValue("totalWeight", announcementVehicle.getTotalWeight());
			params.addValue("workingVolume", announcementVehicle.getWorkingVolume());
			params.addValue("hoursOfOperation", announcementVehicle.getHoursOfOperation());
			params.addValue("numberOfBeds", announcementVehicle.getNumberOfBeds());
			params.addValue("toiletType", announcementVehicle.getToiletType().getValue());
			params.addValue("heatingType", announcementVehicle.getHeatingType().getValue());
			params.addValue("airConditionType", announcementVehicle.getAirConditionType().getValue());
			params.addValue("lengthSize", announcementVehicle.getLengthSize());
			params.addValue("materialType", announcementVehicle.getMaterialType().getValue());
			params.addValue("width", announcementVehicle.getWidth());
			params.addValue("bicycleSize", announcementVehicle.getBicycleSize());
			params.addValue("numberOfGears", announcementVehicle.getNumberOfGears());
			params.addValue("description", announcementVehicle.getDescription());
			params.addValue("createdBy", announcementVehicle.getMetaProps().getCreatedBy());
			params.addValue("createdOn",
					DateUtils.getSubmissionDate(announcementVehicle.getMetaProps().getCreatedOn()));
			params.addValue("deleteFlag",
					SqlUtils.getSubmissionBoolean(announcementVehicle.getMetaProps().getDeleteFlag()));

			KeyHolder keyHolder = new GeneratedKeyHolder();
			String sql = SqlContainer.CREATE_ANNOUNCEMENT_VEHICLE;
			namedParameterJdbcTemplate.update(sql, params, keyHolder, new String[] { "ID" });

			return keyHolder.getKey().longValue();

		} catch (Exception e) {
			// TODO
			return null;
		}
	}

	@Override
	public AnnouncementVehicle getAnnouncementVehicle(Long announcementVehicleId) {
		try {
			String sql = SqlContainer.GET_ANNOUNCEMENT_VEHICLE;
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("announcementVehicleId", announcementVehicleId);
			List<AnnouncementVehicle> announcementVehicles = namedParameterJdbcTemplate.query(sql, params,
					new AnnouncementVehicleRowMapper());
			if (null != announcementVehicles && !announcementVehicles.isEmpty()) {
				return announcementVehicles.get(0);
			}
			return null;

		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}

	@Override
	public List<AnnouncementVehicle> getAnnouncementVehicles() {
		try {
			String sql = SqlContainer.GET_ANNOUNCEMENT_VEHICLES;
			return namedParameterJdbcTemplate.query(sql, new AnnouncementVehiclesResultSetExtractor());

		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}

}
