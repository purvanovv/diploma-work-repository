package tusofia.carsellservices.model.enums;

public enum PeriodType {

	MONTHS("m"), YEARS("y"), DAYS("d");

	private String value;

	private PeriodType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
