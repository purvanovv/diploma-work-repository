package tusofia.carsellservices.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;

import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.model.SubCategory;

public class CategoriesRowMapper implements RowMapper<List<MainCategory>> {

	@Override
	public List<MainCategory> mapRow(ResultSet rs, int rowNum) throws SQLException {
		List<MainCategory> categories = new ArrayList<MainCategory>();
		while (rs.next()) {
			SubCategory subCategory = extractSubCategoryFromResultSet(rs);
			MainCategory mainCategory = findMainCategory(categories, subCategory.getMainCategoryId());
			if (mainCategory == null) {
				mainCategory = extractMainCategoryFromResultSet(rs);
				categories.add(mainCategory);
			}
			mainCategory.addSubCategory(subCategory);

		}

		return categories;
	}

	private MainCategory findMainCategory(List<MainCategory> categories, Long categoryId) {
		return categories.stream().filter(c -> c.getId().equals(categoryId)).findAny().orElse(null);
	}

	private MainCategory extractMainCategoryFromResultSet(ResultSet rs) throws SQLException {
		MainCategory mainCategory = new MainCategory();
		mainCategory.setId(rs.getLong("MAIN_CATEGORY_ID"));
		mainCategory.setName(rs.getString("MAIN_CATEGORY_NAME"));
		return mainCategory;
	}

	private SubCategory extractSubCategoryFromResultSet(ResultSet rs) throws SQLException {
		SubCategory subCategory = new SubCategory();
		subCategory.setId(rs.getLong("SUB_CATEGORY_ID"));
		subCategory.setName(rs.getString("SUB_CATEGORY_NAME"));
		subCategory.setMainCategoryId(rs.getLong("MAIN_CATEGORY_ID"));
		return subCategory;
	}

}
