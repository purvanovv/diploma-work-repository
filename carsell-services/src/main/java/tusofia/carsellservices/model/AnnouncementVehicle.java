package tusofia.carsellservices.model;

import java.math.BigDecimal;
import java.util.Date;

import tusofia.carsellservices.model.enums.Currency;
import tusofia.carsellservices.model.enums.PeriodType;

public class Announcement {
	private Long id;
	private Long mainCategoryId;
	private String brand;
	private String model;
	private String engineType;
	private String condition;
	private Integer horsePower;
	private String gearboxType;
	private Long subCategoryId;
	private Integer cubature;
	private String coolingType;
	private Short engineCategory;
	private BigDecimal price;
	private Currency currency;
	private Date dateOfManufacture;
	private Integer mileage;
	private String color;
	private String region;
	private String city;
	private Long validDays;
	private PeriodType periodType;
	private Date adValidFrom;
	private Date adValidTo;
	private String description;
	private MetaProps metaProps;

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

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
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

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public Integer getHorsePower() {
		return horsePower;
	}

	public void setHorsePower(Integer horsePower) {
		this.horsePower = horsePower;
	}

	public String getGearboxType() {
		return gearboxType;
	}

	public void setGearboxType(String gearboxType) {
		this.gearboxType = gearboxType;
	}

	public Long getSubCategoryId() {
		return subCategoryId;
	}

	public void setSubCategoryId(Long subCategoryId) {
		this.subCategoryId = subCategoryId;
	}

	public Integer getCubature() {
		return cubature;
	}

	public void setCubature(Integer cubature) {
		this.cubature = cubature;
	}

	public String getCoolingType() {
		return coolingType;
	}

	public void setCoolingType(String coolingType) {
		this.coolingType = coolingType;
	}

	public Short getEngineCategory() {
		return engineCategory;
	}

	public void setEngineCategory(Short engineCategory) {
		this.engineCategory = engineCategory;
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

	public Date getAdValidFrom() {
		return adValidFrom;
	}

	public void setAdValidFrom(Date adValidFrom) {
		this.adValidFrom = adValidFrom;
	}

	public Date getAdValidTo() {
		return adValidTo;
	}

	public void setAdValidTo(Date adValidTo) {
		this.adValidTo = adValidTo;
	}

	public String getDescription() {
		return description;
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

	public PeriodType getPeriodType() {
		return periodType;
	}

	public void setPeriodType(PeriodType periodType) {
		this.periodType = periodType;
	}

}
