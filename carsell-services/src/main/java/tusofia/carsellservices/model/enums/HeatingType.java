package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum HeatingType {
	NO("Няма"), ELECTRICAL("Електриеско"), GAS("Газово");

	private final String value;

	private static final Map<String, HeatingType> displayNameIndex = new HashMap<String, HeatingType>();
	private static final Map<String, HeatingType> displayNameString = new HashMap<String, HeatingType>();

	static {
		for (HeatingType e : HeatingType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private HeatingType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
	
	public static String getValue(HeatingType input) {
		if (null == input) {
			return null;
		}
		return input.getValue();
	}

	public static HeatingType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static HeatingType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
