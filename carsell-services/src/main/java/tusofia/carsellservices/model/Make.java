package tusofia.carsellservices.model;

import java.util.ArrayList;
import java.util.List;

public class Make {
	private Long id;
	private String make;
	private List<String> models;
	private Long mainCategoryId;

	public Make() {
		models = new ArrayList<String>();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public Long getMainCategoryId() {
		return mainCategoryId;
	}

	public void setMainCategoryId(Long mainCategoryId) {
		this.mainCategoryId = mainCategoryId;
	}

	public List<String> getModels() {
		return models;
	}

	public void setModels(List<String> models) {
		this.models = models;
	}

	public void addModel(String model) {
		this.models.add(model);
	}

}
