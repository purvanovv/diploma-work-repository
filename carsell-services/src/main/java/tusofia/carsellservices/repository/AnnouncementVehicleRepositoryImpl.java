package tusofia.carsellservices.repository;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import tusofia.carsellservices.exceptions.DatabaseException;
import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.CategoryPair;
import tusofia.carsellservices.model.Make;
import tusofia.carsellservices.model.dtos.AnnouncementVehicleSearchDTO;
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
import tusofia.carsellservices.util.Constants;
import tusofia.carsellservices.util.DateUtils;
import tusofia.carsellservices.util.SearchAnnouncementQuery;
import tusofia.carsellservices.util.SqlContainer;
import tusofia.carsellservices.util.SqlUtils;
import tusofia.carsellservices.util.StringUtils;

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
			throw new DatabaseException("Exception in database layer", e);
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
			params.addValue("userInfoId", announcementVehicle.getUserId());
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
			throw new DatabaseException("Exception in database layer", e);
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
			throw new DatabaseException("Exception in database layer", e);
		}
	}

	@Override
	public List<AnnouncementVehicle> getAnnouncementVehicles() {
		try {
			String sql = SqlContainer.GET_ANNOUNCEMENT_VEHICLES;
			return namedParameterJdbcTemplate.query(sql,
					new AnnouncementVehiclesResultSetExtractor(imageFileRepository));

		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}
	}

	@Override
	public List<AnnouncementVehicle> getAnnouncementVehiclesBySearchQuery(AnnouncementVehicleSearchDTO searchModel) {
		try {
			SearchAnnouncementQuery query = getSearchAnnouncemenQuery(searchModel);
			List<AnnouncementVehicle> announcementVehicles = namedParameterJdbcTemplate.query(query.getQuery(),
					query.getParams(), new AnnouncementVehiclesResultSetExtractor(imageFileRepository));

			return announcementVehicles.stream().filter(a -> {
				BigDecimal priceInLev = a.getPrice();
				if (a.getCurrency() == Currency.EUR) {
					priceInLev = a.getPrice().multiply(Constants.EUR);
				} else if (a.getCurrency() == Currency.USD) {
					priceInLev = a.getPrice().multiply(Constants.USD);
				}

				if (!StringUtils.isNullOrEmpty(searchModel.getPriceMin())
						&& !StringUtils.isNullOrEmpty(searchModel.getPriceMax())) {
					return priceInLev.compareTo(new BigDecimal(searchModel.getPriceMin())) >= 0
							&& priceInLev.compareTo(new BigDecimal(searchModel.getPriceMax())) <= 0;
				} else if (!StringUtils.isNullOrEmpty(searchModel.getPriceMin())) {
					return priceInLev.compareTo(new BigDecimal(searchModel.getPriceMin())) >= 0;
				} else if (!StringUtils.isNullOrEmpty(searchModel.getPriceMax())) {
					return priceInLev.compareTo(new BigDecimal(searchModel.getPriceMax())) <= 0;
				}
				return true;
			}).collect(Collectors.toList());

		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
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
			throw new DatabaseException("Exception in database layer", e);
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
			throw new DatabaseException("Exception in database layer", e);
		}
	}

	@Override
	public Map<String, List<String>> getRegions() {
		try {
			String sql = SqlContainer.GET_REGIONS;
			return namedParameterJdbcTemplate.getJdbcTemplate().queryForObject(sql, null, new RegionsRowMapper());
		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}
	}

	@Override
	public Long editAnnouncementVehicle(AnnouncementVehicle announcementVehicle) {
		try {
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("id", announcementVehicle.getId());
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
			Date validTo = DateUtils.addDays(announcementVehicle.getValidFrom(), announcementVehicle.getValidDays());
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
			params.addValue("modifiedBy", announcementVehicle.getMetaProps().getModifiedBy());
			params.addValue("modifiedOn", DateUtils.getSubmissionDate(new Date()));

			String sql = SqlContainer.EDIT_ANNOUNCEMENT_VEHICLE;
			namedParameterJdbcTemplate.update(sql, params);

			return announcementVehicle.getId();

		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}

	}

	private SearchAnnouncementQuery getSearchAnnouncemenQuery(AnnouncementVehicleSearchDTO searchModel) {
		return new SearchAnnouncementQuery.Builder()
				.addConditionValue("main_category_id", searchModel.getMainCategoryId(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("make", searchModel.getMake(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("model", searchModel.getModel(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("engine_type", searchModel.getEngineType(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("condition_type", searchModel.getConditionType(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("horse_power", "horse_power_min", searchModel.getHorsePowerMin(),
						SearchAnnouncementQuery.GREATER_OR_EQUAlS)
				.addConditionValue("horse_power", "horse_power_max", searchModel.getHorsePowerMax(),
						SearchAnnouncementQuery.LESS_OR_EQUAlS)
				.addConditionValue("emission_standart_type", searchModel.getEmissionStandartType(),
						SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("gearbox_type", searchModel.getGearboxType(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("sub_category_id", searchModel.getSubCategoryId(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("cooling_type", searchModel.getCoolingType(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("number_of_axels", searchModel.getNumberOfAxels(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("number_of_seats", searchModel.getNumberOfSeats(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("weight_capacity", "weight_capacity_min", searchModel.getWeightCapacityMin(),
						SearchAnnouncementQuery.GREATER_OR_EQUAlS)
				.addConditionValue("weight_capacity", "weight_capacity_max", searchModel.getWeightCapacityMax(),
						SearchAnnouncementQuery.LESS_OR_EQUAlS)
				.addConditionValue("date_of_manufacture", "year_of_manufacture_from",
						searchModel.getDateOfManufactureFrom(), SearchAnnouncementQuery.GREATER_OR_EQUAlS)
				.addConditionValue("date_of_manufacture", "year_of_manufacture_to",
						searchModel.getDateOfManufactureTo(), SearchAnnouncementQuery.LESS_OR_EQUAlS)
				.addConditionValue("mileage", searchModel.getMileageMax(), SearchAnnouncementQuery.LESS_OR_EQUAlS)
				.addConditionValue("color", searchModel.getColor(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("region", searchModel.getRegion(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("city", searchModel.getRegion(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("cubature", "cubature_min", searchModel.getCubatureMin(),
						SearchAnnouncementQuery.GREATER_OR_EQUAlS)
				.addConditionValue("cubature", "cubature_max", searchModel.getCubatureMax(),
						SearchAnnouncementQuery.LESS_OR_EQUAlS)
				.addConditionValue("engine_category_type", searchModel.getEngineCategoryType(),
						SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("total_weight", searchModel.getTotalWeightMin(),
						SearchAnnouncementQuery.GREATER_OR_EQUAlS)
				.addConditionValue("working_volume", searchModel.getWorkingVolumeMin(),
						SearchAnnouncementQuery.GREATER_OR_EQUAlS)
				.addConditionValue("hours_of_operation", searchModel.getHoursOfOperationMax(),
						SearchAnnouncementQuery.LESS_OR_EQUAlS)
				.addConditionValue("number_of_beds", searchModel.getNumberOfBeds(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("toilet_type", searchModel.getToiletType(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("heatingType", searchModel.getHeatingType(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("air_condition_type", searchModel.getAirConditionType(),
						SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("length_size", searchModel.getLengthSizeMax(),
						SearchAnnouncementQuery.LESS_OR_EQUAlS)
				.addConditionValue("material_type", searchModel.getMaterialType(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("width", searchModel.getWidthMax(), SearchAnnouncementQuery.LESS_OR_EQUAlS)
				.addConditionValue("bicycle_size", searchModel.getBicycleSize(), SearchAnnouncementQuery.EQUAlS)
				.addConditionValue("number_of_gears", searchModel.getNumberOfGears(), SearchAnnouncementQuery.EQUAlS)
				.build();

	}

	@Override
	public void removeAnnouncementById(Long announcementId) {
		try {
			String sql = SqlContainer.DELETE_ANNOUNCEMENT_VEHICLE;
			MapSqlParameterSource params = new MapSqlParameterSource();
			params.addValue("announcementId", announcementId);
			namedParameterJdbcTemplate.update(sql, params);
		} catch (Exception e) {
			throw new DatabaseException("Exception in database layer", e);
		}

	}

}
