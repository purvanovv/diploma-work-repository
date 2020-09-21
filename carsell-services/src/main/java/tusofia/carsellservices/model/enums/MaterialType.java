package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum MaterialType {
	ALUMINUM("Алуминий"), IRON("Желязо"), WOOD("Дърво"), CEMENT("Бетон"), KEVLAR("Кевлар"), PVC("PVC"),
	PLASTIC("Пластмаса");

	private final String value;

	private static final Map<String, MaterialType> displayNameIndex = new HashMap<String, MaterialType>();
	private static final Map<String, MaterialType> displayNameString = new HashMap<String, MaterialType>();

	static {
		for (MaterialType e : MaterialType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private MaterialType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
	
	public static String getValue(MaterialType input) {
		if (null == input) {
			return null;
		}
		return input.getValue();
	}

	public static MaterialType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static MaterialType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
