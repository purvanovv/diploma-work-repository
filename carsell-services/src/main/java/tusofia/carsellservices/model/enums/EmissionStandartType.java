package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum EmissionStandartType {
	EURO_1("Евро 1"), EURO_2("Евро 2"), EURO_3("Евро 3"), EURO_4("Евро 4"), EURO_5("Евро 5"), EURO_6("Евро 6");

	private final String value;
	private static final Map<String, EmissionStandartType> displayNameIndex = new HashMap<String, EmissionStandartType>();
	private static final Map<String, EmissionStandartType> displayNameString = new HashMap<String, EmissionStandartType>();

	static {
		for (EmissionStandartType e : EmissionStandartType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private EmissionStandartType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public static EmissionStandartType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static EmissionStandartType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
