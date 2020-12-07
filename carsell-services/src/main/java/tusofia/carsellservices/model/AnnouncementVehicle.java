package tusofia.carsellservices.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

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

public class AnnouncementVehicle {
	private Long id;
	private MainCategory mainCategory;
	private String make;
	private String model;
	private EngineType engineType;
	private ConditionType conditionType;
	private Integer horsePower;
	private EmissionStandartType emissionStandartType;
	private GearboxType gearboxType;
	private SubCategory subCategory;
	private CoolingType coolingType;
	private Short numberOfAxels;
	private Short numberOfSeats;
	private Integer weightCapacity;
	private BigDecimal price;
	private Currency currency;
	private Date dateOfManufacture;
	private Integer mileage;
	private String color;
	private String region;
	private String city;
	private Long validDays;
	private Integer cubature;
	private EngineCategoryType engineCategoryType;
	private Date validFrom;
	private Date validTo;
	private Integer totalWeight;
	private Integer workingVolume;
	private Integer hoursOfOperation;
	private Short numberOfBeds;
	private ToiletType toiletType;
	private HeatingType heatingType;
	private AirConditionType airConditionType;
	private Integer lengthSize;
	private MaterialType materialType;
	private Integer width;
	private Short bicycleSize;
	private Short numberOfGears;
	private String description;
	private MetaProps metaProps;
	private List<ImageFile> imageFiles;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public MainCategory getMainCategory() {
		return mainCategory;
	}

	public void setMainCategory(MainCategory mainCategory) {
		this.mainCategory = mainCategory;
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

	public EngineType getEngineType() {
		return engineType;
	}

	public void setEngineType(EngineType engineType) {
		this.engineType = engineType;
	}

	public ConditionType getConditionType() {
		return conditionType;
	}

	public void setConditionType(ConditionType conditionType) {
		this.conditionType = conditionType;
	}

	public Integer getHorsePower() {
		return horsePower;
	}

	public void setHorsePower(Integer horsePower) {
		this.horsePower = horsePower;
	}

	public EmissionStandartType getEmissionStandartType() {
		return emissionStandartType;
	}

	public void setEmissionStandartType(EmissionStandartType emissionStandartType) {
		this.emissionStandartType = emissionStandartType;
	}

	public GearboxType getGearboxType() {
		return gearboxType;
	}

	public void setGearboxType(GearboxType gearboxType) {
		this.gearboxType = gearboxType;
	}

	public SubCategory getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(SubCategory subCategory) {
		this.subCategory = subCategory;
	}

	public CoolingType getCoolingType() {
		return coolingType;
	}

	public void setCoolingType(CoolingType coolingType) {
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

	public Currency getCurrency() {
		return currency;
	}

	public void setCurrency(Currency currency) {
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

	public EngineCategoryType getEngineCategoryType() {
		return engineCategoryType;
	}

	public void setEngineCategoryType(EngineCategoryType engineCategoryType) {
		this.engineCategoryType = engineCategoryType;
	}

	public Date getValidFrom() {
		return validFrom;
	}

	public void setValidFrom(Date validFrom) {
		this.validFrom = validFrom;
	}

	public Date getValidTo() {
		return validTo;
	}

	public void setValidTo(Date validTo) {
		this.validTo = validTo;
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

	public ToiletType getToiletType() {
		return toiletType;
	}

	public void setToiletType(ToiletType toiletType) {
		this.toiletType = toiletType;
	}

	public HeatingType getHeatingType() {
		return heatingType;
	}

	public void setHeatingType(HeatingType heatingType) {
		this.heatingType = heatingType;
	}

	public AirConditionType getAirConditionType() {
		return airConditionType;
	}

	public void setAirConditionType(AirConditionType airConditionType) {
		this.airConditionType = airConditionType;
	}

	public Integer getLengthSize() {
		return lengthSize;
	}

	public void setLengthSize(Integer lengthSize) {
		this.lengthSize = lengthSize;
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

	public MaterialType getMaterialType() {
		return materialType;
	}

	public void setMaterialType(MaterialType materialType) {
		this.materialType = materialType;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public MetaProps getMetaProps() {
		return metaProps;
	}

	public void setMetaProps(MetaProps metaProps) {
		this.metaProps = metaProps;
	}

	public List<ImageFile> getImageFiles() {
		return imageFiles;
	}

	public void setImageFiles(List<ImageFile> imageFiles) {
		this.imageFiles = imageFiles;
	}

}
