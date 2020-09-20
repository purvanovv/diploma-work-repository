package tusofia.carsellservices.validation;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Date;

import tusofia.carsellservices.model.dtos.AnnouncementVehicleCreateDTO;
import tusofia.carsellservices.model.enums.AirConditionType;
import tusofia.carsellservices.model.enums.ConditionType;
import tusofia.carsellservices.model.enums.CoolingType;
import tusofia.carsellservices.model.enums.Currency;
import tusofia.carsellservices.model.enums.EmissionStandartType;
import tusofia.carsellservices.model.enums.EngineCategoryType;
import tusofia.carsellservices.model.enums.EngineType;
import tusofia.carsellservices.model.enums.GearboxType;
import tusofia.carsellservices.model.enums.HeatingType;
import tusofia.carsellservices.model.enums.MaterialType;
import tusofia.carsellservices.model.enums.ToiletType;
import tusofia.carsellservices.util.DateUtils;

public enum AnnouncementVehicleValidationStrategyImpl implements AnnouncementVehicleValidationStrategy {

	MAIN_CATEGORY_ID(ValidationType.MAIN_CATEGORY_ID) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getMainCategoryId()) {
				return new ValidationResult(ValidationType.MAIN_CATEGORY_ID,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			}
			return new ValidationResult(true);
		}
	},
	BRAND(ValidationType.BRAND) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getMake()) {
				return new ValidationResult(ValidationType.BRAND, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getMake().length() > 1000) {
				return new ValidationResult(ValidationType.BRAND,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MAXIMUM_LENGTH, 1000), false);
			}
			return new ValidationResult(true);
		}
	},
	MODEL(ValidationType.MODEL) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getModel()) {
				return new ValidationResult(ValidationType.MODEL, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getModel().length() > 1000) {
				return new ValidationResult(ValidationType.MODEL,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MAXIMUM_LENGTH, 1000), false);
			}
			return new ValidationResult(true);
		}
	},
	ENGINE_TYPE(ValidationType.ENGINE_TYPE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getEngineType()) {
				return new ValidationResult(ValidationType.ENGINE_TYPE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (null == EngineType.lookupByDisplayName(input.getEngineType())) {
				return new ValidationResult(ValidationType.ENGINE_TYPE,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(ValidationType.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	CONDITION_TYPE(ValidationType.CONDITION_TYPE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getConditionType()) {
				return new ValidationResult(ValidationType.CONDITION_TYPE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (null == ConditionType.lookupByDisplayName(input.getConditionType())) {
				return new ValidationResult(ValidationType.CONDITION_TYPE,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(ConditionType.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	HORSE_POWER(ValidationType.HORSE_POWER) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null != input.getHorsePower() && input.getHorsePower() < 1) {
				return new ValidationResult(ValidationType.HORSE_POWER,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 1), false);
			}
			return new ValidationResult(true);
		}
	},
	EMISSION_STANDART_TYPE(ValidationType.EMISSION_STANDART_TYPE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getEmissionStandartType()) {
				return new ValidationResult(ValidationType.EMISSION_STANDART_TYPE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (null == EmissionStandartType.lookupByDisplayName(input.getEmissionStandartType())) {
				return new ValidationResult(ValidationType.EMISSION_STANDART_TYPE,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(EmissionStandartType.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	GEARBOX_TYPE(ValidationType.GEARBOX_TYPE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getGearboxType()) {
				return new ValidationResult(ValidationType.GEARBOX_TYPE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (null == GearboxType.lookupByDisplayName(input.getGearboxType())) {
				return new ValidationResult(ValidationType.GEARBOX_TYPE,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(GearboxType.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	SUB_CATEGORY_ID(ValidationType.SUB_CATEGORY_ID) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getSubCategoryId()) {
				return new ValidationResult(ValidationType.SUB_CATEGORY_ID,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			}
			return new ValidationResult(true);
		}
	},
	COOLING_TYPE(ValidationType.COOLING_TYPE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getCoolingType()) {
				return new ValidationResult(ValidationType.COOLING_TYPE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (null == CoolingType.lookupByDisplayName(input.getCoolingType())) {
				return new ValidationResult(ValidationType.COOLING_TYPE,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(CoolingType.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	NUMBER_OF_AXELS(ValidationType.NUMBER_OF_AXELS) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getNumberOfAxels()) {
				return new ValidationResult(ValidationType.NUMBER_OF_AXELS,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (input.getNumberOfAxels() < 1) {
				return new ValidationResult(ValidationType.NUMBER_OF_AXELS,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 1), false);
			}
			return new ValidationResult(true);
		}
	},
	NUMBER_OF_SEATS(ValidationType.NUMBER_OF_SEATS) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getNumberOfSeats()) {
				return new ValidationResult(ValidationType.NUMBER_OF_SEATS,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (input.getNumberOfSeats() < 1) {
				return new ValidationResult(ValidationType.NUMBER_OF_SEATS,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 1), false);
			}
			return new ValidationResult(true);
		}
	},
	WEIGHT_CAPACITY(ValidationType.WEIGHT_CAPACITY) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getWeightCapacity()) {
				return new ValidationResult(ValidationType.WEIGHT_CAPACITY,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (input.getWeightCapacity() < 1) {
				return new ValidationResult(ValidationType.WEIGHT_CAPACITY,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 1), false);
			}
			return new ValidationResult(true);
		}
	},
	PRICE(ValidationType.PRICE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getPrice()) {
				return new ValidationResult(ValidationType.PRICE, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getPrice().compareTo(new BigDecimal(0)) == -1) {
				return new ValidationResult(ValidationType.PRICE,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 0.1), false);
			}
			return new ValidationResult(true);
		}
	},
	CURRENCY(ValidationType.CURRENCY) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getCurrency()) {
				return new ValidationResult(ValidationType.CURRENCY, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (null == Currency.lookupByDisplayName(input.getCurrency())) {
				return new ValidationResult(ValidationType.CURRENCY,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(Currency.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	DATE_OF_MANUFACTURE(ValidationType.DATE_OF_MANUFACTURE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getDateOfManufacture()) {
				return new ValidationResult(ValidationType.DATE_OF_MANUFACTURE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			}
			return new ValidationResult(true);
		}
	},
	MILEAGE(ValidationType.MILEAGE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getMileage()) {
				return new ValidationResult(ValidationType.MILEAGE, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getMileage() < 0) {
				return new ValidationResult(ValidationType.MILEAGE,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 0), false);
			}
			return new ValidationResult(true);
		}
	},
	COLOR(ValidationType.COLOR) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getColor()) {
				return new ValidationResult(ValidationType.COLOR, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getColor().length() > 1000) {
				return new ValidationResult(ValidationType.COLOR,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MAXIMUM_LENGTH, 1000), false);
			}
			return new ValidationResult(true);
		}
	},
	REGION(ValidationType.REGION) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getRegion()) {
				return new ValidationResult(ValidationType.REGION, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getRegion().length() > 1000) {
				return new ValidationResult(ValidationType.REGION,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MAXIMUM_LENGTH, 1000), false);
			}
			return new ValidationResult(true);
		}
	},
	CITY(ValidationType.CITY) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getCity()) {
				return new ValidationResult(ValidationType.CITY, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getRegion().length() > 1000) {
				return new ValidationResult(ValidationType.CITY,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MAXIMUM_LENGTH, 1000), false);
			}
			return new ValidationResult(true);
		}
	},
	VALID_DAYS(ValidationType.VALID_DAYS) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getValidDays()) {
				return new ValidationResult(ValidationType.VALID_DAYS, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getValidDays() < 1) {
				return new ValidationResult(ValidationType.VALID_DAYS,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 1), false);
			} else if (input.getValidDays() > 100) {
				return new ValidationResult(ValidationType.VALID_DAYS,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MAX_VALUE, 100), false);
			}
			return new ValidationResult(true);
		}
	},
	CUBATURE(ValidationType.CUBATURE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getCubature()) {
				return new ValidationResult(ValidationType.CUBATURE, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getCubature() < 1) {
				return new ValidationResult(ValidationType.CUBATURE,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 1), false);
			}
			return new ValidationResult(true);
		}
	},
	ENGINE_CATEGORY_TYPE(ValidationType.ENGINE_CATEGORY_TYPE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getEngineCategoryType()) {
				return new ValidationResult(ValidationType.ENGINE_CATEGORY_TYPE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (null == EngineCategoryType.lookupByDisplayName(input.getEngineCategoryType())) {
				return new ValidationResult(ValidationType.ENGINE_CATEGORY_TYPE,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(EngineCategoryType.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	VALID_FROM(ValidationType.VALID_FROM) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getValidFrom()) {
				return new ValidationResult(ValidationType.VALID_FROM, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);

			} else if (DateUtils.getZeroTimeDate(input.getValidFrom())
					.compareTo(DateUtils.getZeroTimeDate(new Date())) == -1) {
				return new ValidationResult(ValidationType.VALID_FROM,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_DATE_IS_BEFORE,
								DateUtils.getSubmissionDate(new Date())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	TOTAL_WEIGHT(ValidationType.TOTAL_WEIGHT) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getTotalWeight()) {
				return new ValidationResult(ValidationType.TOTAL_WEIGHT,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (input.getTotalWeight() < 1) {
				return new ValidationResult(ValidationType.TOTAL_WEIGHT,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 1), false);
			}
			return new ValidationResult(true);
		}
	},
	WORKING_VOLUME(ValidationType.WORKING_VOLUME) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getWorkingVolume()) {
				return new ValidationResult(ValidationType.WORKING_VOLUME,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (input.getWorkingVolume() < 1) {
				return new ValidationResult(ValidationType.WORKING_VOLUME,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 1), false);
			}
			return new ValidationResult(true);
		}
	},
	HOURS_OF_OPERAITON(ValidationType.HOURS_OF_OPERAITON) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getHoursOfOperation()) {
				return new ValidationResult(ValidationType.HOURS_OF_OPERAITON,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (input.getHoursOfOperation() < 0) {
				return new ValidationResult(ValidationType.HOURS_OF_OPERAITON,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 0), false);
			}
			return new ValidationResult(true);
		}
	},
	NUMBER_OF_BEDS(ValidationType.NUMBER_OF_BEDS) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getNumberOfBeds()) {
				return new ValidationResult(ValidationType.NUMBER_OF_BEDS,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (input.getNumberOfBeds() < 0) {
				return new ValidationResult(ValidationType.NUMBER_OF_BEDS,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 0), false);
			}
			return new ValidationResult(true);
		}
	},
	TOILET_TYPE(ValidationType.TOILET_TYPE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getToiletType()) {
				return new ValidationResult(ValidationType.TOILET_TYPE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (null == ToiletType.lookupByDisplayName(input.getToiletType())) {
				return new ValidationResult(ValidationType.TOILET_TYPE,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(ToiletType.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	HEATING_TYPE(ValidationType.HEATING_TYPE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getHeatingType()) {
				return new ValidationResult(ValidationType.HEATING_TYPE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (null == HeatingType.lookupByDisplayName(input.getHeatingType())) {
				return new ValidationResult(ValidationType.HEATING_TYPE,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(HeatingType.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	AIR_CONDITION_TYPE(ValidationType.AIR_CONDITION_TYPE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getAirConditionType()) {
				return new ValidationResult(ValidationType.AIR_CONDITION_TYPE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);

			} else if (null == AirConditionType.lookupByDisplayName(input.getAirConditionType())) {
				return new ValidationResult(ValidationType.AIR_CONDITION_TYPE,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(AirConditionType.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	LENGTH_SIZE(ValidationType.LENGTH_SIZE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getLengthSize()) {
				return new ValidationResult(ValidationType.LENGTH_SIZE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (input.getLengthSize() < 1) {
				return new ValidationResult(ValidationType.LENGTH_SIZE,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 1), false);
			}
			return new ValidationResult(true);
		}
	},
	MATERIAL_TYPE(ValidationType.MATERIAL_TYPE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getMaterialType()) {
				return new ValidationResult(ValidationType.MATERIAL_TYPE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			} else if (null == MaterialType.lookupByDisplayName(input.getMaterialType())) {
				return new ValidationResult(ValidationType.MATERIAL_TYPE,
						String.format(ValidationConstants.ERROR_MESSAGE_INPUT_IS_NOT_PARSABLE_ENUM, input,
								Arrays.toString(MaterialType.values())),
						false);
			}
			return new ValidationResult(true);
		}
	},
	WIDTH(ValidationType.WIDTH) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getWidth()) {
				return new ValidationResult(ValidationType.WIDTH, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getLengthSize() < 1) {
				return new ValidationResult(ValidationType.WIDTH,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MIN_VALUE, 1), false);
			}
			return new ValidationResult(true);
		}
	},
	BICYCLE_SIZE(ValidationType.BICYCLE_SIZE) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getBicycleSize()) {
				return new ValidationResult(ValidationType.BICYCLE_SIZE,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			}
			return new ValidationResult(true);
		}
	},
	NUMBER_OF_GEARS(ValidationType.NUMBER_OF_GEARS) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getNumberOfGears()) {
				return new ValidationResult(ValidationType.NUMBER_OF_GEARS,
						ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY, false);
			}
			return new ValidationResult(true);
		}
	},
	DESCIPTION(ValidationType.DESCIPTION) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			if (null == input.getDescription()) {
				return new ValidationResult(ValidationType.DESCIPTION, ValidationConstants.ERROR_MESSAGE_FIELD_IS_EMPTY,
						false);
			} else if (input.getDescription().length() > 2000) {
				return new ValidationResult(ValidationType.DESCIPTION,
						String.format(ValidationConstants.ERROR_MESSAGE_FIELD_MAXIMUM_LENGTH, 2000), false);
			}
			return new ValidationResult(true);
		}
	},
	UNSUPPORTED(ValidationType.UNSUPPORTED) {
		public ValidationResult validate(AnnouncementVehicleCreateDTO input) {
			return new ValidationResult(false);
		}
	};

	public ValidationType getValidationType() {
		return this.validationType;
	}

	private ValidationType validationType;

	private AnnouncementVehicleValidationStrategyImpl(ValidationType validationType) {
		this.validationType = validationType;
	}

}
