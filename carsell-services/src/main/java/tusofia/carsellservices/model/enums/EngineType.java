package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum EngineType {
	DIESEL("Дизелов"), GASOLINE("Бензинов"), HYBRID("Хибриден"), ELECTRIC("Електрически");

	private final String value;

	private static final Map<String, EngineType> displayNameIndex = new HashMap<String, EngineType>();
	private static final Map<String, EngineType> displayNameString = new HashMap<String, EngineType>();

	static {
		for (EngineType e : EngineType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private EngineType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
	
	public static String getValue(EngineType input) {
		if (null == input) {
			return null;
		}
		return input.getValue();
	}

	public static EngineType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static EngineType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
