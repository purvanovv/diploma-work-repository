package tusofia.carsellservices.model.enums;

public enum EngineCategoryType {
	TYPE_2(2), TYPE_4(4);

	private final Integer value;

	private EngineCategoryType(Integer value) {
		this.value = value;
	}

	public Integer getValue() {
		return value;
	}

	public static EngineCategoryType fromString(String inputValue) {
		if (null == inputValue) {
			return null;
		}
		for (EngineCategoryType e : EngineCategoryType.values()) {
			if (e.getValue().equals(Integer.parseInt(inputValue))) {
				return e;
			}
		}
		return null;
	}
}
