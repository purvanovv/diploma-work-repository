package tusofia.carsellservices.model.enums;

public enum Currency {

	LEV("лв."), USD("USD"), EUR("EUR");

	private String value;

	private Currency(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
