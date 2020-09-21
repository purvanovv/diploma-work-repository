package tusofia.carsellservices.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum Currency {

	LEV("лв."), USD("USD"), EUR("EUR");

	private static final Map<String, Currency> displayNameIndex = new HashMap<String, Currency>();
	private static final Map<String, Currency> displayNameString = new HashMap<String, Currency>();

	static {
		for (Currency e : Currency.values()) {
			displayNameIndex.put(e.name(), e);
			displayNameString.put(e.value, e);
		}
	}

	private final String value;

	private Currency(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public static String getValue(Currency input) {
		if (null == input) {
			return null;
		}
		return input.getValue();
	}
	
	public static Currency lookupByDisplayName(String name) {
		return displayNameIndex.get(name);
	}

	public static Currency lookupByStringValue(String input) {
		return displayNameString.get(input);
	}

}
