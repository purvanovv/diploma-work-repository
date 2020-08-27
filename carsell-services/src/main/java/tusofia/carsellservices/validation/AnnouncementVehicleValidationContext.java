package tusofia.carsellservices.validation;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import tusofia.carsellservices.model.dtos.AnnouncementVehicleCreateDTO;

public class AnnouncementVehicleValidationContext {
	private Set<AnnouncementVehicleValidationStrategy> validationStrategies;

	public AnnouncementVehicleValidationContext(Set<AnnouncementVehicleValidationStrategy> validationStrategies) {
		this.validationStrategies = validationStrategies;
	}

	public List<ValidationResult> executeAndGetList(AnnouncementVehicleCreateDTO input) {
		AnnouncementVehicleValidationStrategy validationStrategy = AnnouncementVehicleValidationStrategyImpl.UNSUPPORTED;
		List<ValidationResult> validated = new ArrayList<ValidationResult>();
		for (Iterator<AnnouncementVehicleValidationStrategy> iterator = validationStrategies.iterator(); iterator
				.hasNext();) {
			validationStrategy = iterator.next();
			ValidationResult validationResult = validationStrategy.validate(input);
			if (!validationResult.getValidationResult()) {
				validated.add(validationResult);
			}
		}
		return validated;
	}

}
