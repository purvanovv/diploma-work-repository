package tusofia.carsellservices.model.enums;

public enum ConditionType {
	NEW("Нов"), USED("Употребяван"), ON_PARTS("За части");

	private final String value;

	private ConditionType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
}
