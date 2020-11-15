package tusofia.carsellservices.model;

import java.util.ArrayList;
import java.util.List;

public class CategoryPair {
	private MainCategory mainCategory;
	private List<SubCategory> subCategories;

	public CategoryPair() {
		this.subCategories = new ArrayList<SubCategory>();
	}

	public MainCategory getMainCategory() {
		return mainCategory;
	}

	public void setMainCategory(MainCategory mainCategory) {
		this.mainCategory = mainCategory;
	}

	public List<SubCategory> getSubCategories() {
		return subCategories;
	}

	public void setSubCategories(List<SubCategory> subCategories) {
		this.subCategories = subCategories;
	}

	public void addSubCategory(SubCategory subCategory) {
		subCategories.add(subCategory);
	}

}
