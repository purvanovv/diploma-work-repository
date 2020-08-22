package tusofia.carsellservices.model.enums;

public enum GearboxType {
	MANUAL("Ръчна"), AUTOMATIC("Автоматична"), SEMI_AUTOMATIC("Полуавтоматична");

	private final String value;

	private GearboxType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
}
