package tusofia.carsellservices.model.dtos;

import java.math.BigDecimal;
import java.util.Date;

import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.model.SubCategory;
import tusofia.carsellservices.model.enums.AirConditionType;
import tusofia.carsellservices.model.enums.ConditionType;
import tusofia.carsellservices.model.enums.CoolingType;
import tusofia.carsellservices.model.enums.EmissionStandartType;
import tusofia.carsellservices.model.enums.EngineCategoryType;
import tusofia.carsellservices.model.enums.EngineType;
import tusofia.carsellservices.model.enums.GearboxType;
import tusofia.carsellservices.model.enums.HeatingType;
import tusofia.carsellservices.model.enums.MaterialType;
import tusofia.carsellservices.model.enums.ToiletType;

public class AnnouncementVehicleCreateDTO {
	private Long id;
	private Long mainCategoryId;
	private String make;
	private String model;
	private String engineType;
	private String conditionType;
	private Integer horsePower;
	private String emissionStandartType;
	private String gearboxType;
	private Long subCategoryId;
	private String coolingType;
	private Short numberOfAxels;
	private Short numberOfSeats;
	private Integer weightCapacity;
	private BigDecimal price;
	private String currency;
	private Date dateOfManufacture;
	private Integer mileage;
	private String color;
	private String region;
	private String city;
	private Long validDays;
	private Integer cubature;
	private String engineCategoryType;
	private Date validFrom;
	private Integer totalWeight;
	private Integer workingVolume;
	private Integer hoursOfOperation;
	private Short numberOfBeds;
	private String toiletType;
	private String heatingType;
	private String airConditionType;
	private Integer lengthSize;
	private String materialType;
	private Integer width;
	private Short bicycleSize;
	private Short numberOfGears;
	private String description;
	private Long userId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getMainCategoryId() {
		return mainCategoryId;
	}

	public void setMainCategoryId(Long mainCategoryId) {
		this.mainCategoryId = mainCategoryId;
	}

	public Long getSubCategoryId() {
		return subCategoryId;
	}

	public void setSubCategoryId(Long subCategoryId) {
		this.subCategoryId = subCategoryId;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getEngineType() {
		return engineType;
	}

	public void setEngineType(String engineType) {
		this.engineType = engineType;
	}

	public String getConditionType() {
		return conditionType;
	}

	public void setConditionType(String conditionType) {
		this.conditionType = conditionType;
	}

	public Integer getHorsePower() {
		return horsePower;
	}

	public void setHorsePower(Integer horsePower) {
		this.horsePower = horsePower;
	}

	public String getEmissionStandartType() {
		return emissionStandartType;
	}

	public void setEmissionStandartType(String emissionStandartType) {
		this.emissionStandartType = emissionStandartType;
	}

	public String getGearboxType() {
		return gearboxType;
	}

	public void setGearboxType(String gearboxType) {
		this.gearboxType = gearboxType;
	}

	public String getCoolingType() {
		return coolingType;
	}

	public void setCoolingType(String coolingType) {
		this.coolingType = coolingType;
	}

	public Short getNumberOfAxels() {
		return numberOfAxels;
	}

	public void setNumberOfAxels(Short numberOfAxels) {
		this.numberOfAxels = numberOfAxels;
	}

	public Short getNumberOfSeats() {
		return numberOfSeats;
	}

	public void setNumberOfSeats(Short numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}

	public Integer getWeightCapacity() {
		return weightCapacity;
	}

	public void setWeightCapacity(Integer weightCapacity) {
		this.weightCapacity = weightCapacity;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public Date getDateOfManufacture() {
		return dateOfManufacture;
	}

	public void setDateOfManufacture(Date dateOfManufacture) {
		this.dateOfManufacture = dateOfManufacture;
	}

	public Integer getMileage() {
		return mileage;
	}

	public void setMileage(Integer mileage) {
		this.mileage = mileage;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Long getValidDays() {
		return validDays;
	}

	public void setValidDays(Long validDays) {
		this.validDays = validDays;
	}

	public Integer getCubature() {
		return cubature;
	}

	public void setCubature(Integer cubature) {
		this.cubature = cubature;
	}

	public String getEngineCategoryType() {
		return engineCategoryType;
	}

	public void setEngineCategoryType(String engineCategoryType) {
		this.engineCategoryType = engineCategoryType;
	}

	public Date getValidFrom() {
		return validFrom;
	}

	public void setValidFrom(Date validFrom) {
		this.validFrom = validFrom;
	}

	public Integer getTotalWeight() {
		return totalWeight;
	}

	public void setTotalWeight(Integer totalWeight) {
		this.totalWeight = totalWeight;
	}

	public Integer getWorkingVolume() {
		return workingVolume;
	}

	public void setWorkingVolume(Integer workingVolume) {
		this.workingVolume = workingVolume;
	}

	public Integer getHoursOfOperation() {
		return hoursOfOperation;
	}

	public void setHoursOfOperation(Integer hoursOfOperation) {
		this.hoursOfOperation = hoursOfOperation;
	}

	public Short getNumberOfBeds() {
		return numberOfBeds;
	}

	public void setNumberOfBeds(Short numberOfBeds) {
		this.numberOfBeds = numberOfBeds;
	}

	public String getToiletType() {
		return toiletType;
	}

	public void setToiletType(String toiletType) {
		this.toiletType = toiletType;
	}

	public String getHeatingType() {
		return heatingType;
	}

	public void setHeatingType(String heatingType) {
		this.heatingType = heatingType;
	}

	public String getAirConditionType() {
		return airConditionType;
	}

	public void setAirConditionType(String airConditionType) {
		this.airConditionType = airConditionType;
	}

	public Integer getLengthSize() {
		return lengthSize;
	}

	public void setLengthSize(Integer lengthSize) {
		this.lengthSize = lengthSize;
	}

	public String getMaterialType() {
		return materialType;
	}

	public void setMaterialType(String materialType) {
		this.materialType = materialType;
	}

	public Integer getWidth() {
		return width;
	}

	public void setWidth(Integer width) {
		this.width = width;
	}

	public Short getBicycleSize() {
		return bicycleSize;
	}

	public void setBicycleSize(Short bicycleSize) {
		this.bicycleSize = bicycleSize;
	}

	public Short getNumberOfGears() {
		return numberOfGears;
	}

	public void setNumberOfGears(Short numberOfGears) {
		this.numberOfGears = numberOfGears;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

}
