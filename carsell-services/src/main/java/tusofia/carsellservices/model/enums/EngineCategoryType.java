package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum EngineCategoryType {
	TACT_2(2), TACT_4(4);

	private final Integer value;

	private static final Map<String, EngineCategoryType> displayNameIndex = new HashMap<String, EngineCategoryType>();
	private static final Map<Integer, EngineCategoryType> displayNameString = new HashMap<Integer, EngineCategoryType>();

	static {
		for (EngineCategoryType e : EngineCategoryType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private EngineCategoryType(Integer value) {
		this.value = value;
	}

	public Integer getValue() {
		return value;
	}

	public static Integer getValue(EngineCategoryType input) {
		if (null == input) {
			return null;
		}
		return input.getValue();
	}

	public static EngineCategoryType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static EngineCategoryType lookupByIntegerValue(Integer input) {
		return displayNameString.get(input);
	}

}
