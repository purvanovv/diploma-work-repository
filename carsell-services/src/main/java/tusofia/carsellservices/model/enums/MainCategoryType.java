package tusofia.carsellservices.model.enums;

public enum MainCategoryType {
	CARS_AND_JEEPS("Автомобили и Джипове"), BUSES("Бусове"), TRUCKS("Камиони"), MOTORBIKES("Мотоциклети"),
	AGRICULTURAL("Селскостопански"), INDUSTRIAL("Индустриални"), CURRY("Кари"), CARAVANS("Каравани"),
	YACHT_AND_BOATS("Яахти и лодки"), TRAILERS("Ремаркета"), BICYCLES("Велосипеди");

	private final String value;

	private MainCategoryType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public static MainCategoryType fromString(String inputValue) {
		for (MainCategoryType e : MainCategoryType.values()) {
			if (e.getValue().equals(inputValue)) {
				return e;
			}
		}
		return null;
	}
}
