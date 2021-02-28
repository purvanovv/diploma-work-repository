package tusofia.carsellservices.util;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;

public class SearchAnnouncementQuery {
	public static String EQUAlS = "=";
	public static String GREATER_OR_EQUAlS = ">=";
	public static String LESS_OR_EQUAlS = "<=";

	private MapSqlParameterSource params;
	private String query;

	private SearchAnnouncementQuery(MapSqlParameterSource params, String query) {
		this.params = params;
		this.query = query;
	}

	public MapSqlParameterSource getParams() {
		return params;
	}

	public String getQuery() {
		return query;
	}

	public static class Builder {
		private MapSqlParameterSource params;
		private StringBuilder query;

		public Builder() {
			String queryBase = "" + "SELECT av.id, " + "       av.main_category_id, " + "av.user_info_id, "
					+ "       mc.NAME as MAIN_CATEGORY_NAME, " + "       mc.value as MAIN_CATEGORY_VALUE, "
					+ "       sc.NAME as SUB_CATEGORY_NAME, " + "       av.make, " + "       av.model, "
					+ "       av.engine_type, " + "       av.condition_type, " + "       av.horse_power, "
					+ "       av.emission_standart_type, " + "       av.gearbox_type, " + "       av.sub_category_id, "
					+ "       av.cooling_type, " + "       av.number_of_axels, " + "       av.number_of_seats, "
					+ "       av.weight_capacity, " + "       av.price, " + "       av.currency, "
					+ "       av.date_of_manufacture, " + "       av.mileage, " + "       av.color, "
					+ "       av.region, " + "       av.city, " + "       av.valid_days, " + "       av.cubature, "
					+ "       av.engine_category_type, " + "       av.valid_from, " + "       av.valid_to, "
					+ "       av.total_weight, " + "       av.working_volume, " + "       av.hours_of_operation, "
					+ "       av.number_of_beds, " + "       av.toilet_type, " + "       av.heating_type, "
					+ "       av.air_condition_type, " + "       av.length_size, " + "       av.material_type, "
					+ "       av.width, " + "       av.bicycle_size, " + "       av.number_of_gears, "
					+ "       av.description, " + "       av.created_on, " + "       av.created_by, "
					+ "       av.delete_flag, " + "       av.modified_by, " + "       av.modified_on, "
					+ "       av.delete_by " + "FROM   announcement_vehicle av " + "       JOIN main_categories mc "
					+ "         ON mc.id = av.main_category_id " + "       JOIN sub_categories sc "
					+ "         ON sc.id = av.sub_category_id "
					+ " 	  WHERE  av.delete_flag = 'N' AND EXISTS (select if.ID from image_files if where if.ANNOUNCEMENT_ID = av.id)";
			query = new StringBuilder();
			query.append(queryBase);
			params = new MapSqlParameterSource();
		}

		public Builder addConditionValue(String columnName, String value, String operator) {
			if (!StringUtils.isNullOrEmpty(value)) {
				if (columnName.equals("date_of_manufacture")) {
					String parameter = " AND extract(year from av.date_of_manufacture) " + operator + " :" + columnName;
					query.append(parameter);
					params.addValue(columnName, value);
				} else {
					String parameter = " AND av." + columnName + " " + operator + " :" + columnName;
					query.append(parameter);
					params.addValue(columnName, value);
				}

			}
			return this;
		}

		public Builder addConditionValue(String columnName, String propertyName, String value, String operator) {
			if (!StringUtils.isNullOrEmpty(value)) {
				if (columnName.equals("date_of_manufacture")) {
					String parameter = " AND extract(year from av.date_of_manufacture) " + operator + " :"
							+ propertyName;
					query.append(parameter);
					params.addValue(propertyName, value);
				} else {
					String parameter = " AND av." + columnName + " " + operator + " :" + propertyName;
					query.append(parameter);
					params.addValue(propertyName, value);
				}

			}
			return this;
		}

		public SearchAnnouncementQuery build() {
			return new SearchAnnouncementQuery(params, query.toString());
		}
	}

}
