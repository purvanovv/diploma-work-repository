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
	
	public static ConditionType fromString(String inputValue) {
		for (ConditionType e : ConditionType.values()) {
			if (e.getValue().equals(inputValue)) {
				return e;
			}
		}
		return null;
	}
}
