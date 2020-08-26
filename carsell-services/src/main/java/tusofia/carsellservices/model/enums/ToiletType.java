package tusofia.carsellservices.model.enums;

public enum ToiletType {
	NO("Няма"), CHEMICAL("Химическа"), ORDINARY("Обикновена");

	private final String value;

	private ToiletType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public static ToiletType fromString(String inputValue) {
		for (ToiletType e : ToiletType.values()) {
			if (e.getValue().equals(inputValue)) {
				return e;
			}
		}
		return null;
	}
}
