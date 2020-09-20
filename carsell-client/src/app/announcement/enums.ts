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
  BICYCLES = 'Велосипеди'
}

export enum Control {
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
  DESCRIPTION
}

