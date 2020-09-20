package tusofia.carsellservices.model;

import java.util.ArrayList;
import java.util.List;

public class MainCategory {
	private Long id;
	private String name;
	private String value;
	private List<SubCategory> subCategories;

	public MainCategory() {
		this.subCategories = new ArrayList<SubCategory>();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public List<SubCategory> getSubCategories() {
		return subCategories;
	}

	public void setSubCategories(List<SubCategory> subCategories) {
		this.subCategories = subCategories;
	}

	public void addSubCategory(SubCategory subCategory) {
		this.subCategories.add(subCategory);
	}

}
