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
	
	public static CoolingType fromString(String inputValue) {
		for (CoolingType e : CoolingType.values()) {
			if (e.getValue().equals(inputValue)) {
				return e;
			}
		}
		return null;
	}
}
