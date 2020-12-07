package tusofia.carsellservices.repository;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import oracle.ucp.util.Pair;
import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.CategoryPair;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.model.Make;
import tusofia.carsellservices.model.SubCategory;
import tusofia.carsellservices.model.enums.AirConditionType;
import tusofia.carsellservices.model.enums.ConditionType;
import tusofia.carsellservices.model.enums.CoolingType;
import tusofia.carsellservices.model.enums.Currency;
import tusofia.carsellservices.model.enums.EmissionStandartType;
import tusofia.carsellservices.model.enums.EngineCategoryType;
import tusofia.carsellservices.model.enums.EngineType;
import tusofia.carsellservices.model.enums.GearboxType;
import tusofia.carsellservices.model.enums.HeatingType;
import tusofia.carsellservices.model.enums.MaterialType;
import tusofia.carsellservices.model.enums.ToiletType;
import tusofia.carsellservices.repository.rowmappers.AnnouncementVehicleRowMapper;
import tusofia.carsellservices.repository.rowmappers.CategoriesRowMapper;
import tusofia.carsellservices.repository.rowmappers.MakesRowMapper;
import tusofia.carsellservices.repository.rowmappers.RegionsRowMapper;
import tusofia.carsellservices.repository.rsextractors.AnnouncementVehiclesResultSetExtractor;
import tusofia.carsellservices.util.DateUtils;
import tusofia.carsellservices.util.SqlContainer;
import tusofia.carsellservices.util.SqlUtils;

@Repository
public class AnnouncementVehicleRepositoryImpl implements AnnouncementVehicleRepository {

	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	private ImageFileRepository imageFileRepository;

	@Autowired
	public AnnouncementVehicleRepositoryImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate,
			ImageFileRepository imageFileRepository) {
		this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
		this.imageFileRepository = imageFileRepository;
	}

	@Override
	public List<CategoryPair> getCategories() {
		try {
			String sql = SqlContainer.GET_CATEGORIES;
			List<CategoryPair> categories = namedParameterJdbcTemplate.getJdbcTemplate().queryForObject(sql, null,
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
			params.addValue("mainCategoryId", announcementVehicle.getMainCategory().getId());
			params.addValue("make", announcementVehicle.getMake());
			params.addValue("model", announcementVehicle.getModel());
			params.addValue("engineType", EngineType.getValue(announcementVehicle.getEngineType()));
			params.addValue("conditionType", ConditionType.getValue(announcementVehicle.getConditionType()));
			params.addValue("horsePower", announcementVehicle.getHorsePower());
			params.addValue("emissionStandartType",
					EmissionStandartType.getValue(announcementVehicle.getEmissionStandartType()));
			params.addValue("gearboxType", GearboxType.getValue(announcementVehicle.getGearboxType()));
			params.addValue("subCategoryId", announcementVehicle.getSubCategory().getId());
			params.addValue("coolingType", CoolingType.getValue(announcementVehicle.getCoolingType()));
			params.addValue("cubature", announcementVehicle.getCubature());
			params.addValue("engineCategoryType",
					EngineCategoryType.getValue(announcementVehicle.getEngineCategoryType()));
			params.addValue("price", announcementVehicle.getPrice());
			params.addValue("currency", Currency.getValue(announcementVehicle.getCurrency()));
			params.addValue("dateOfManufacture",
					DateUtils.getSubmissionDate(announcementVehicle.getDateOfManufacture()));
			params.addValue("mileage", announcementVehicle.getMileage());
			params.addValue("color", announcementVehicle.getColor());
			params.addValue("region", announcementVehicle.getRegion());
			params.addValue("city", announcementVehicle.getCity());
			params.addValue("validDays", announcementVehicle.getValidDays());
			Date validFrom = new Date();
			params.addValue("validFrom", DateUtils.getSubmissionDate(validFrom));
			Date validTo = DateUtils.addDays(validFrom, announcementVehicle.getValidDays());
			params.addValue("validTo", DateUtils.getSubmissionDate(validTo));
			params.addValue("numberOfAxels", announcementVehicle.getNumberOfAxels());
			params.addValue("numberOfSeats", announcementVehicle.getNumberOfSeats());
			params.addValue("weightCapacity", announcementVehicle.getWeightCapacity());
			params.addValue("engineCategoryType",
					EngineCategoryType.getValue(announcementVehicle.getEngineCategoryType()));
			params.addValue("totalWeight", announcementVehicle.getTotalWeight());
			params.addValue("workingVolume", announcementVehicle.getWorkingVolume());
			params.addValue("hoursOfOperation", announcementVehicle.getHoursOfOperation());
			params.addValue("numberOfBeds", announcementVehicle.getNumberOfBeds());
			params.addValue("toiletType", ToiletType.getValue(announcementVehicle.getToiletType()));
			params.addValue("heatingType", HeatingType.getValue(announcementVehicle.getHeatingType()));
			params.addValue("airConditionType", AirConditionType.getValue(announcementVehicle.getAirConditionType()));
			params.addValue("lengthSize", announcementVehicle.getLengthSize());
			params.addValue("materialType", MaterialType.getValue(announcementVehicle.getMaterialType()));
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

				AnnouncementVehicle announcementVehicle = announcementVehicles.get(0);
				announcementVehicle.setImageFiles(imageFileRepository.getImagesByAnnouncementId(announcementVehicleId));
				return announcementVehicle;
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
			return namedParameterJdbcTemplate.query(sql,
					new AnnouncementVehiclesResultSetExtractor(imageFileRepository));

		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}

	@Override
	public tusofia.carsellservices.model.enums.MainCategoryType getMainCategoryType(Long mainCategoryId) {
		try {
			String sql = SqlContainer.GET_MAIN_CATEGORY;
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("mainCategoryId", mainCategoryId);
			String mainCategory = namedParameterJdbcTemplate.queryForObject(sql, params, String.class);
			return tusofia.carsellservices.model.enums.MainCategoryType.lookupByStringValue(mainCategory);

		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}

	@Override
	public Map<String, List<Make>> getMakesByMainCategory(Long mainCategoryId) {
		try {
			String sql = SqlContainer.GET_MAKES_BY_CATEGORY;
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("mainCategoryId", mainCategoryId);
			return namedParameterJdbcTemplate.queryForObject(sql, params, new MakesRowMapper());
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}

	@Override
	public Map<String, List<String>> getRegions() {
		try {
			String sql = SqlContainer.GET_REGIONS;
			return namedParameterJdbcTemplate.getJdbcTemplate().queryForObject(sql, null, new RegionsRowMapper());
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}

}
