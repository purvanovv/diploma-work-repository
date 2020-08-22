package tusofia.carsellservices.model.enums;

public enum MaterialType {
	ALUMINUM("Алуминий"), IRON("Желязо"), WOOD("Дърво"), CEMENT("Бетон"), KEVLAR("Кевлар"), PVC("PVC"),
	PLASTIC("Пластмаса");

	private final String value;

	private MaterialType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
}
