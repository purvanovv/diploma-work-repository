package tusofia.carsellservices.repository.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;

import tusofia.carsellservices.model.CategoryPair;
import tusofia.carsellservices.model.MainCategory;
import tusofia.carsellservices.model.SubCategory;

public class CategoriesRowMapper implements RowMapper<List<CategoryPair>> {

	@Override
	public List<CategoryPair> mapRow(ResultSet rs, int rowNum) throws SQLException {

		List<CategoryPair> categories = new ArrayList<>();
		while (rs.next()) {
			SubCategory subCategory = extractSubCategoryFromResultSet(rs);
			CategoryPair category = findCategory(categories, subCategory.getMainCategoryId());
			if (category == null) {
				category = new CategoryPair();
				category.setMainCategory(extractMainCategoryFromResultSet(rs));
				categories.add(category);
			}
			category.addSubCategory(subCategory);

		}

		return categories;
	}

	private CategoryPair findCategory(List<CategoryPair> categories, Long categoryId) {
		return categories.stream().filter(c -> c.getMainCategory().getId() == categoryId).findAny().orElse(null);
	}

	public MainCategory extractMainCategoryFromResultSet(ResultSet rs) throws SQLException {
		MainCategory mainCategory = new MainCategory();
		mainCategory.setId(rs.getLong("MAIN_CATEGORY_ID"));
		mainCategory.setName(rs.getString("MAIN_CATEGORY_NAME"));
		mainCategory.setValue(rs.getString("MAIN_CATEGORY_VALUE"));
		return mainCategory;
	}

	public SubCategory extractSubCategoryFromResultSet(ResultSet rs) throws SQLException {
		SubCategory subCategory = new SubCategory();
		subCategory.setId(rs.getLong("SUB_CATEGORY_ID"));
		subCategory.setName(rs.getString("SUB_CATEGORY_NAME"));
		subCategory.setMainCategoryId(rs.getLong("MAIN_CATEGORY_ID"));
		return subCategory;
	}

}
