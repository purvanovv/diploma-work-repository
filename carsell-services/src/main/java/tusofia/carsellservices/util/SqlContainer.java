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
	public static String GET_REGIONS;
	public static String CREATE_IMAGE_FILE;
	public static String GET_IMAGE_FILES_BY_ANNOUNCEMENT_ID;
	public static String EDIT_ANNOUNCEMENT_VEHICLE;
	public static String DELETE_IMAGE_FILES_BY_ANNOUNCEMENT_ID;
	public static String CREATE_USER_INFO;
	public static String CREATE_USER;
	public static String GET_USER_BY_USERNAME;
	public static String GET_USER_INFO_BY_USER_ID;
	public static String EDIT_PASSWORD;
	public static String EDIT_USER_INFO;

	@Autowired
	public SqlContainer(@Value("${sql.container}") String sqlPath) {

		GET_ANNOUNCEMENT_VEHICLES = SqlUtils.getClasspathResource(sqlPath,
				"announcements/GET_ANNOUNCEMENT_VEHICLES.sql");
		DELETE_ANNOUNCEMENT_VEHICLE = SqlUtils.getClasspathResource(sqlPath,
				"announcements/DELETE_ANNOUNCEMENT_VEHICLE.sql");
		GET_ANNOUNCEMENT_VEHICLE = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_ANNOUNCEMENT_VEHICLE.sql");
		CREATE_ANNOUNCEMENT_VEHICLE = SqlUtils.getClasspathResource(sqlPath,
				"announcements/CREATE_ANNOUNCEMENT_VEHICLE.sql");
		EDIT_ANNOUNCEMENT_VEHICLE = SqlUtils.getClasspathResource(sqlPath,
				"announcements/EDIT_ANNOUNCEMENT_VEHICLE.sql");
		GET_CATEGORIES = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_CATEGORIES.sql");
		GET_MAIN_CATEGORY = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_MAIN_CATEGORY.sql");
		GET_MAKES_BY_CATEGORY = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_MAKES_BY_CATEGORY.sql");
		GET_REGIONS = SqlUtils.getClasspathResource(sqlPath, "announcements/GET_REGIONS.sql");
		CREATE_IMAGE_FILE = SqlUtils.getClasspathResource(sqlPath, "announcements/CREATE_IMAGE_FILE.sql");
		GET_IMAGE_FILES_BY_ANNOUNCEMENT_ID = SqlUtils.getClasspathResource(sqlPath,
				"announcements/GET_IMAGE_FILES_BY_ANNOUNCEMENT_ID.sql");
		DELETE_IMAGE_FILES_BY_ANNOUNCEMENT_ID = SqlUtils.getClasspathResource(sqlPath,
				"announcements/DELETE_IMAGE_FILES_BY_ANNOUNCEMENT_ID.sql");
		CREATE_USER_INFO = SqlUtils.getClasspathResource(sqlPath, "users/CREATE_USER_INFO.sql");
		CREATE_USER = SqlUtils.getClasspathResource(sqlPath, "users/CREATE_USER.sql");
		GET_USER_BY_USERNAME = SqlUtils.getClasspathResource(sqlPath, "users/GET_USER_BY_USERNAME.sql");
		GET_USER_INFO_BY_USER_ID = SqlUtils.getClasspathResource(sqlPath, "users/GET_USER_INFO_BY_USER_ID.sql");
		EDIT_PASSWORD = SqlUtils.getClasspathResource(sqlPath, "users/EDIT_PASSWORD.sql");
		EDIT_USER_INFO = SqlUtils.getClasspathResource(sqlPath, "users/EDIT_USER_INFO.sql");

	}
}
