package tusofia.carsellservices.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
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

	public static Date getZeroTimeDate(Date inputDate) {
		Date res = inputDate;
		Calendar calendar = Calendar.getInstance();

		calendar.setTime(inputDate);
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		calendar.set(Calendar.MINUTE, 0);
		calendar.set(Calendar.SECOND, 0);
		calendar.set(Calendar.MILLISECOND, 0);

		res = calendar.getTime();

		return res;
	}

}
