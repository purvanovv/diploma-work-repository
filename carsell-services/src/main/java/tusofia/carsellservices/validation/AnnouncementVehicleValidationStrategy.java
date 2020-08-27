package tusofia.carsellservices.validation;

import tusofia.carsellservices.model.dtos.AnnouncementVehicleCreateDTO;

public interface AnnouncementVehicleValidationStrategy {
	public ValidationResult validate(AnnouncementVehicleCreateDTO announcementVehicleCreateDTO);

	public ValidationType getValidationType();
}
