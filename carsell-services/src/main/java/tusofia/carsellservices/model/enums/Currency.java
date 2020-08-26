package tusofia.carsellservices.model.enums;

public enum Currency {

	LEV("лв."), USD("USD"), EUR("EUR");

	private final String value;

	private Currency(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
	
	public static Currency fromString(String inputValue) {
		for (Currency e : Currency.values()) {
			if (e.getValue().equals(inputValue)) {
				return e;
			}
		}
		return null;
	}

}
