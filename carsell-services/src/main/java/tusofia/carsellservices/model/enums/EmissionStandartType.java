package tusofia.carsellservices.model.enums;

public enum EmissionStandartType {
	EURO_1("Евро 1"), EURO_2("Евро 2"), EURO_3("Евро 3"), EURO_4("Евро 4"), EURO_5("Евро 5"), EURO_6("Евро 6");

	private final String value;

	private EmissionStandartType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
	
	public static EmissionStandartType fromString(String inputValue) {
		for (EmissionStandartType e : EmissionStandartType.values()) {
			if (e.getValue().equals(inputValue)) {
				return e;
			}
		}
		return null;
	}
}
