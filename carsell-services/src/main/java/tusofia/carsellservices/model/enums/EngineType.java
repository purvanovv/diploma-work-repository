package tusofia.carsellservices.model.enums;

public enum EngineType {
	DIESEL("Дизелов"), GASOLINE("Бензинов"), HYBRID("Хибриден"),ELECTRIC("Електрически");

	private final String value;

	private EngineType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
}
