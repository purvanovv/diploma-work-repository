package tusofia.carsellservices.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

public class DateUtils {
	private static SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd");

	public static Date getSubmissionDateConverted(String date) throws ParseException {
		if (null == date) {
			return null;
		}
		return formater.parse(date);
	}

	public static String getSubmissionDate(Date date) {
		if (null == date) {
			return null;
		}
		return formater.format(date);
	}

	public static Date addDays(Date date, Long days) {
		if (null != date && null != days) {
			LocalDate locaDate = LocalDate.parse(DateUtils.getSubmissionDate(date));
			return Date.from(locaDate.plusDays(days).atStartOfDay(ZoneId.systemDefault()).toInstant());
		}
		return null;
	}

}
