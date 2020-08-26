package tusofia.carsellservices.model.enums;

public enum HeatingType {
	NO("Няма"), ELECTRICAL("Електриеско"), GAS("Газово");

	private final String value;

	private HeatingType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
	
	public static HeatingType fromString(String inputValue) {
		for (HeatingType e : HeatingType.values()) {
			if (e.getValue().equals(inputValue)) {
				return e;
			}
		}
		return null;
	}
}
