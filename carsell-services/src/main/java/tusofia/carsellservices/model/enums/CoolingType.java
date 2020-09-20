package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum CoolingType {
	WATER("Водно"), AIR("Въздушно");

	private static final Map<String, CoolingType> displayNameIndex = new HashMap<String, CoolingType>();
	private static final Map<String, CoolingType> displayNameString = new HashMap<String, CoolingType>();

	static {
		for (CoolingType e : CoolingType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private final String value;

	private CoolingType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public static CoolingType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static CoolingType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
