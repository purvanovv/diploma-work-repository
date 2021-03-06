UPDATE ANNOUNCEMENT_VEHICLE 
SET    MAKE = :make, 
       MODEL = :model, 
       ENGINE_TYPE = :engineType, 
       CONDITION_TYPE = :conditionType, 
       HORSE_POWER = :horsePower, 
       EMISSION_STANDART_TYPE = :emissionStandartType, 
       GEARBOX_TYPE = :gearboxType, 
       SUB_CATEGORY_ID = :subCategoryId, 
       COOLING_TYPE = :coolingType, 
       CUBATURE = :cubature, 
       PRICE = :price, 
       CURRENCY = :currency, 
       DATE_OF_MANUFACTURE = :dateOfManufacture, 
       MILEAGE = :mileage, 
       COLOR = :color, 
       REGION = :region, 
       CITY = :city, 
       VALID_DAYS = :validDays, 
       VALID_TO = :validTo, 
       NUMBER_OF_AXELS = :numberOfAxels, 
       NUMBER_OF_SEATS = :numberOfSeats, 
       WEIGHT_CAPACITY = :weightCapacity, 
       ENGINE_CATEGORY_TYPE = :engineCategoryType, 
       TOTAL_WEIGHT = :totalWeight, 
       WORKING_VOLUME = :workingVolume, 
       HOURS_OF_OPERATION = :hoursOfOperation, 
       NUMBER_OF_BEDS = :numberOfBeds, 
       TOILET_TYPE = :toiletType, 
       HEATING_TYPE = :heatingType, 
       AIR_CONDITION_TYPE = :airConditionType, 
       LENGTH_SIZE = :lengthSize, 
       MATERIAL_TYPE = :materialType, 
       WIDTH = :width, 
       BICYCLE_SIZE = :bicycleSize, 
       NUMBER_OF_GEARS = :numberOfGears, 
       DESCRIPTION = :description, 
       MODIFIED_BY = :modifiedBy, 
       MODIFIED_ON = :modifiedOn 
WHERE  ID = :id