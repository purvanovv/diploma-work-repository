package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum GearboxType {
	MANUAL("Ръчна"), AUTOMATIC("Автоматична"), SEMI_AUTOMATIC("Полуавтоматична");

	private final String value;

	private static final Map<String, GearboxType> displayNameIndex = new HashMap<String, GearboxType>();
	private static final Map<String, GearboxType> displayNameString = new HashMap<String, GearboxType>();

	static {
		for (GearboxType e : GearboxType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private GearboxType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public static GearboxType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static GearboxType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
