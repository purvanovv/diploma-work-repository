package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum AirConditionType {
	NO("Няма"), ELECTRICAL("Електрически"), TO_THE_ENGINE("Към двигателя");

	private final String value;

	private static final Map<String, AirConditionType> displayNameIndex = new HashMap<String, AirConditionType>();
	private static final Map<String, AirConditionType> displayNameString = new HashMap<String, AirConditionType>();

	static {
		for (AirConditionType e : AirConditionType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private AirConditionType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
	

	public static AirConditionType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static AirConditionType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
