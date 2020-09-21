package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum MainCategoryType {
	CARS_AND_JEEPS("Автомобили и Джипове"), BUSES("Бусове"), TRUCKS("Камиони"), MOTORBIKES("Мотоциклети"),
	AGRICULTURAL("Селскостопански"), INDUSTRIAL("Индустриални"), CURRY("Кари"), CARAVANS("Каравани"),
	YACHT_AND_BOATS("Яахти и лодки"), TRAILERS("Ремаркета"), BICYCLES("Велосипеди");

	private final String value;

	private static final Map<String, MainCategoryType> displayNameIndex = new HashMap<String, MainCategoryType>();
	private static final Map<String, MainCategoryType> displayNameString = new HashMap<String, MainCategoryType>();

	static {
		for (MainCategoryType e : MainCategoryType.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private MainCategoryType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
	
	public static String getValue(MainCategoryType input) {
		if (null == input) {
			return null;
		}
		return input.getValue();
	}

	public static MainCategoryType lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static MainCategoryType lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
