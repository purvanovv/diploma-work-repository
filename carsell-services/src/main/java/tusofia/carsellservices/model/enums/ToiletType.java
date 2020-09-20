package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum ToiletType {
	NO("Няма"), CHEMICAL("Химическа"), ORDINARY("Обикновена");

	private final String value;

	private static final Map<String, ToiletType> displayNameIndex = new HashMap<String, ToiletType>();
	private static final Map<String, ToiletType> displayNameString = new HashMap<String, ToiletType>();

	static {
		for (ToiletType e : ToiletType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private ToiletType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public static ToiletType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static ToiletType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
