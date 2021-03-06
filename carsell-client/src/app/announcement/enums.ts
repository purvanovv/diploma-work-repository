export enum AirConditionType {
  NO = 'Няма',
  ELECTRICAL = 'Електрически',
  TO_THE_ENGINE = 'Към двигателя',
}
export enum ConditionType {
  NEW = 'Нов',
  USED = 'Употребяван',
  ON_PARTS = 'За части',
}
export enum CoolingType {
  WATER = 'Водно',
  AIR = 'Въздушно',
}
export enum Currency {
  LEV = 'лв.',
  USD = 'USD',
  EUR = 'EUR',
}
export enum EmissionStandartType {
  EURO_1 = 'Евро 1',
  EURO_2 = 'Евро 2',
  EURO_3 = 'Евро 3',
  EURO_4 = 'Евро 4',
  EURO_5 = 'Евро 5',
  EURO_6 = 'Евро 6',
}
export enum EngineCategoryType {
  TACT_2 = 'Двутактов',
  TACT_4 = 'Четиритактов',
}
export enum EngineType {
  DIESEL = 'Дизелов',
  GASOLINE = 'Бензинов',
  HYBRID = 'Хибриден',
  ELECTRIC = 'Електрически',
}
export enum GearboxType {
  MANUAL = 'Ръчна',
  AUTOMATIC = 'Автоматична',
  SEMI_AUTOMATIC = 'Полуавтоматична',
}
export enum HeatingType {
  NO = 'Няма',
  ELECTRICAL = 'Електрическо',
  GAS = 'Газово',
}
export enum MaterialType {
  ALUMINUM = 'Алуминии',
  IRON = 'Желязо',
  WOOD = 'Дърво',
  CEMENT = 'Бетон',
  KEVLAR = 'Кевлар',
  PVC = 'PVC',
  PLASTIC = 'Пластмаса',
}
export enum ToiletType {
  NO = 'Няма',
  CHEMICAL = 'Химическа',
  ORDINARY = 'Обикновена',
}

export enum MainCategoryType {
  CARS_AND_JEEPS = 'Автомобили и Джипове',
  BUSES = 'Бусове',
  TRUCKS = 'Камиони',
  MOTORBIKES = 'Мотоциклети',
  AGRICULTURAL = 'Селскостопански',
  INDUSTRIAL = 'Индустриални',
  CURRY = 'Кари',
  CARAVANS = 'Каравани',
  YACHT_AND_BOATS = 'Яахти и лодки',
  TRAILERS = 'Ремаркета',
  BICYCLES = 'Велосипеди',
}

export enum Mode {
  CREATE,
  EDIT,
}

export enum OrderBy {
  NEWEST,
  PRICE_LOWEST,
  PRICE_HIGHEST,
}

export enum OrderByPrice {
  LEV,
  USD,
  EUR,
}

export enum OrderByPublished {
  ALL,
  TODAY,
  LAST_THREE_DAYS,
  LAST_SEVEN_DAYS,
  LAST_FOURTEEN_DAYS,
  LAST_MONTH,
}

export enum Control {
  ID,
  MAIN_CATEGORY_ID,
  MAKE,
  MODEL,
  ENGINE_TYPE,
  CONDITION_TYPE,
  HORSE_POWER,
  EMISSION_STANDART_TYPE,
  GEARBOX_TYPE,
  SUB_CATEGORY_ID,
  COOLING_TYPE,
  NUMBER_OF_AXELS,
  NUMBER_OF_SEATS,
  WEIGHT_CAPACITY,
  PRICE,
  CURRENCY,
  DATE_OF_MANUACTURE,
  MILEAGE,
  COLOR,
  REGION,
  CITY,
  VALID_DAYS,
  VALID_FROM,
  CUBATURE,
  ENGINE_CATEGORY_TYPE,
  TOTAL_WEIGHT,
  WORKING_VOLUME,
  HOURS_OF_OPERATION,
  NUMBER_OF_BEDS,
  TOILET_TYPE,
  HEATING_TYPE,
  AIR_CONDITION_TYPE,
  LENGTH_SIZE,
  MATERIAL_TYPE,
  WIDTH,
  BICYCLE_SIZE,
  NUMBER_OF_GEARS,
  DESCRIPTION,
  HORSE_POWER_MIN,
  HORSE_POWER_MAX,
  WEIGHT_CAPACITY_MIN,
  WEIGHT_CAPACITY_MAX,
  PRICE_MIN,
  PRICE_MAX,
  DATE_OF_MANUACTURE_FROM,
  DATE_OF_MANUACTURE_TO,
  MILEAGE_MAX,
  CUBATURE_MIN,
  CUBATURE_MAX,
  TOTAL_WEIGHT_MIN,
  WORKING_VOLUME_MIN,
  HOURS_OF_OPERATION_MAX,
  LENGTH_SIZE_MAX,
  WIDTH_MAX,
  USER_ID,
}
