package tusofia.carsellservices.model.enums;

public enum AirConditionType {
	NO("Няма"), ELECTRICAL("Електрически"), TO_THE_ENGINE("Към двигателя");

	private final String value;

	private AirConditionType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
}