package tusofia.carsellservices.repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.MetaProps;
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
import tusofia.carsellservices.util.SqlUtils;

public class AnnouncementVehicleRowMapper implements RowMapper<AnnouncementVehicle> {

	@Override
	public AnnouncementVehicle mapRow(ResultSet rs, int rowNum) throws SQLException {
		return extractAnnouncementVehicleFromResultSet(rs);
	}

	private AnnouncementVehicle extractAnnouncementVehicleFromResultSet(ResultSet rs) throws SQLException {
		AnnouncementVehicle announcementVehicle = new AnnouncementVehicle();
		announcementVehicle.setId(rs.getLong("ID"));
		announcementVehicle.setMainCategoryId(rs.getLong("MAIN_CATEGORY_ID"));
		announcementVehicle.setMake(rs.getString("MAKE"));
		announcementVehicle.setModel(rs.getString("MODEL"));
		announcementVehicle.setEngineType(EngineType.fromString(rs.getString("ENGINE_TYPE")));
		announcementVehicle.setConditionType(ConditionType.fromString(rs.getString("CONDITION_TYPE")));
		announcementVehicle.setHorsePower(rs.getInt("HORSE_POWER"));
		announcementVehicle
				.setEmissionStandartType(EmissionStandartType.fromString(rs.getString("EMISSION_STANDART_TYPE")));
		announcementVehicle.setGearboxType(GearboxType.fromString(rs.getString("GEARBOX_TYPE")));
		announcementVehicle.setSubCategoryId(rs.getLong("SUB_CATEGORY_ID"));
		announcementVehicle.setCoolingType(CoolingType.fromString(rs.getString("COOLING_TYPE")));
		announcementVehicle.setNumberOfAxels(rs.getShort("NUMBER_OF_AXELS"));
		announcementVehicle.setNumberOfSeats(rs.getShort("NUMBER_OF_SEATS"));
		announcementVehicle.setWeightCapacity(rs.getInt("WEIGHT_CAPACITY"));
		announcementVehicle.setPrice(rs.getBigDecimal("PRICE"));
		announcementVehicle.setCurrency(Currency.fromString(rs.getString("CURRENCY")));
		announcementVehicle.setDateOfManufacture(rs.getDate("DATE_OF_MANUFACTURE"));
		announcementVehicle.setMileage(rs.getInt("MILEAGE"));
		announcementVehicle.setColor(rs.getString("COLOR"));
		announcementVehicle.setRegion(rs.getString("REGION"));
		announcementVehicle.setCity(rs.getString("CITY"));
		announcementVehicle.setValidDays(rs.getLong("VALID_DAYS"));
		announcementVehicle.setCubature(rs.getInt("CUBATURE"));
		announcementVehicle.setEngineCategoryType(EngineCategoryType.fromString(rs.getString("ENGINE_CATEGORY_TYPE")));
		announcementVehicle.setValidFrom(rs.getDate("VALID_FROM"));
		announcementVehicle.setValidTo(rs.getDate("VALID_TO"));
		announcementVehicle.setTotalWeight(rs.getInt("TOTAL_WEIGHT"));
		announcementVehicle.setWorkingVolume(rs.getInt("WORKING_VOLUME"));
		announcementVehicle.setHoursOfOperation(rs.getInt("HOURS_OF_OPERATION"));
		announcementVehicle.setNumberOfBeds(rs.getShort("NUMBER_OF_BEDS"));
		announcementVehicle.setToiletType(ToiletType.fromString(rs.getString("TOILET_TYPE")));
		announcementVehicle.setHeatingType(HeatingType.fromString(rs.getString("HEATING_TYPE")));
		announcementVehicle.setAirConditionType(AirConditionType.fromString(rs.getString("AIR_CONDITION_TYPE")));
		announcementVehicle.setLengthSize(rs.getInt("LENGTH_SIZE"));
		announcementVehicle.setMaterialType(MaterialType.fromString(rs.getString("MATERIAL_TYPE")));
		announcementVehicle.setWidth(rs.getInt("WIDTH"));
		announcementVehicle.setBicycleSize(rs.getShort("BICYCLE_SIZE"));
		announcementVehicle.setNumberOfGears(rs.getShort("NUMBER_OF_GEARS"));
		announcementVehicle.setDescription(rs.getString("DESCRIPTION"));

		MetaProps metaProps = new MetaProps();
		metaProps.setCreatedBy(rs.getString("CREATED_BY"));
		metaProps.setCreatedOn(rs.getDate("CREATED_ON"));
		metaProps.setDeleteBy(rs.getString("DELETE_BY"));
		metaProps.setDeleteFlag(SqlUtils.getSubmissionBooleanConverted(rs.getString("DELETE_FLAG")));
		metaProps.setModifiedBy(rs.getString("MODIFIED_BY"));
		metaProps.setModifiedOn(rs.getDate("MODIFIED_ON"));
		announcementVehicle.setMetaProps(metaProps);

		return announcementVehicle;
	}

}
