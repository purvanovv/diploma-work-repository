package tusofia.carsellservices.validation;

import java.util.LinkedHashSet;
import java.util.Set;

import tusofia.carsellservices.model.enums.MainCategoryType;

public class AnnouncementVehicleValidationContextBuilder {
	public static AnnouncementVehicleValidationContext build(MainCategoryType mainCategoryType) {
		switch (mainCategoryType) {
		case CARS_AND_JEEPS: {
			Set<AnnouncementVehicleValidationStrategy> strategies = new LinkedHashSet<AnnouncementVehicleValidationStrategy>();
			strategies.add(AnnouncementVehicleValidationStrategyImpl.BRAND);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.MODEL);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.ENGINE_TYPE);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.CONDITION_TYPE);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.HORSE_POWER);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.EMISSION_STANDART_TYPE);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.GEARBOX_TYPE);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.SUB_CATEGORY_ID);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.PRICE);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.CURRENCY);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.DATE_OF_MANUFACTURE);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.MILEAGE);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.COLOR);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.REGION);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.CITY);
			strategies.add(AnnouncementVehicleValidationStrategyImpl.VALID_DAYS);
			return new AnnouncementVehicleValidationContext(strategies);
		}

		default:
			return null;
		}
	}
}
