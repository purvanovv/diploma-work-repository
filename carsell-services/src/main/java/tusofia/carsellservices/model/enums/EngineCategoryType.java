package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum EngineCategoryType {
	TACT_2("Двутактов"), TACT_4("Четиритактов");

	private final String value;

	private static final Map<String, EngineCategoryType> displayNameIndex = new HashMap<String, EngineCategoryType>();
	private static final Map<String, EngineCategoryType> displayNameString = new HashMap<String, EngineCategoryType>();

	static {
		for (EngineCategoryType e : EngineCategoryType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private EngineCategoryType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public static String getValue(EngineCategoryType input) {
		if (null == input) {
			return null;
		}
		return input.getValue();
	}

	public static EngineCategoryType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static EngineCategoryType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
