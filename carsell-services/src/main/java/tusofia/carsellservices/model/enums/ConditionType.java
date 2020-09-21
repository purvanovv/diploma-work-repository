package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum ConditionType {
	NEW("Нов"), USED("Употребяван"), ON_PARTS("За части");

	private static final Map<String, ConditionType> displayNameIndex = new HashMap<String, ConditionType>();
	private static final Map<String, ConditionType> displayNameString = new HashMap<String, ConditionType>();

	static {
		for (ConditionType e : ConditionType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private final String value;

	private ConditionType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
	
	public static String getValue(ConditionType input) {
		if (null == input) {
			return null;
		}
		return input.getValue();
	}

	public static ConditionType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static ConditionType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
