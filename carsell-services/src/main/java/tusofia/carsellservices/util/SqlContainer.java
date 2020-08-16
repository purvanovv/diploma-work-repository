package tusofia.carsellservices.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SqlContainer {

	public static String GET_ANNOUNCEMENTS;
	public static String DELETE_ANNOUNCEMENT;
	public static String GET_ANNOUNCEMENT;
	public static String CREATE_ANNOUNCEMENT;
	public static String GET_CATEGORIES;

	@Autowired
	public SqlContainer(@Value("${sql.container}") String sqlPath) {

		GET_ANNOUNCEMENTS = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_ANNOUNCEMENTS.sql");
		DELETE_ANNOUNCEMENT = SqlUtils.getClasspathResource(sqlPath, "announcements/DELETE_ANNOUNCEMENT.sql");
		GET_ANNOUNCEMENT = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_ANNOUNCEMENT.sql");
		CREATE_ANNOUNCEMENT = SqlUtils.getClasspathResource(sqlPath, "announcements/CREATE_ANNOUNCEMENT.sql");
		GET_CATEGORIES = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_CATEGORIES.sql");

	}
}
