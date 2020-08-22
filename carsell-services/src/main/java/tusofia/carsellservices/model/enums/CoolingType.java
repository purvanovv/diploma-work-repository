package tusofia.carsellservices.model.enums;

public enum CoolingType {
	WATER("Водно"), AIR("Въздушно");

	private final String value;

	private CoolingType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
}
