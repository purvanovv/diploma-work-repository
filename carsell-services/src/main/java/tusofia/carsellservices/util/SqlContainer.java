package tusofia.carsellservices.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SqlContainer {

	public static String GET_ANNOUNCEMENT_VEHICLES;
	public static String DELETE_ANNOUNCEMENT_VEHICLE;
	public static String GET_ANNOUNCEMENT_VEHICLE;
	public static String CREATE_ANNOUNCEMENT_VEHICLE;
	public static String GET_CATEGORIES;
	public static String GET_MAIN_CATEGORY;
	public static String GET_MAKES_BY_CATEGORY;

	@Autowired
	public SqlContainer(@Value("${sql.container}") String sqlPath) {

		GET_ANNOUNCEMENT_VEHICLES = SqlUtils.getClasspathResource(sqlPath,
				"announcements/GET_ANNOUNCEMENT_VEHICLES.sql");
		DELETE_ANNOUNCEMENT_VEHICLE = SqlUtils.getClasspathResource(sqlPath,
				"announcements/DELETE_ANNOUNCEMENT_VEHICLE.sql");
		GET_ANNOUNCEMENT_VEHICLE = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_ANNOUNCEMENT_VEHICLE.sql");
		CREATE_ANNOUNCEMENT_VEHICLE = SqlUtils.getClasspathResource(sqlPath,
				"announcements/CREATE_ANNOUNCEMENT_VEHICLE.sql");
		GET_CATEGORIES = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_CATEGORIES.sql");
		GET_MAIN_CATEGORY = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_MAIN_CATEGORY.sql");
		GET_MAKES_BY_CATEGORY = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_MAKES_BY_CATEGORY.sql");

	}
}
