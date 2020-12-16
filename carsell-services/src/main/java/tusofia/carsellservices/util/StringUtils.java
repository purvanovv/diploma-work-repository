package tusofia.carsellservices.util;

import java.util.List;

public class StringUtils {
	public static String toString(List<String> data) {
		if (data == null || data.isEmpty()) {
			return "";
		}
		return String.join(",", data);
	}
	
	public static boolean isNullOrEmpty(String input){
		return input == null || input.trim() == "";
	}
}
