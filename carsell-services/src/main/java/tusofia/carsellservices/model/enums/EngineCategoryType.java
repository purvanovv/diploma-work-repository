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
}
