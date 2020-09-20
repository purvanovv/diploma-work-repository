import { EngineType, ConditionType, EmissionStandartType, GearboxType, CoolingType, Currency, EngineCategoryType, ToiletType, HeatingType, AirConditionType, MaterialType } from './enums';

export interface MainCategory {
    id: number;
    name: string;
    subCategories: SubCategory[];
}

export interface SubCategory {
    id: number;
    name: string;
    mainCategoryId: number;
}

export interface Make {
    id: number;
    make: string;
    models: string[];
    mainCategoryId: number;
}

export interface Announcement{
    mainCategoryId: number;
    make: string;
    model: string;
    engineType: EngineType;
    conditionType: ConditionType;
    horsePower: number;
    emissionStandartType: EmissionStandartType;
    gearboxType: GearboxType;
    subCategoryId: number;
    coolingType: CoolingType;
    numberOfAxels: number;
    numberOfSeats: number;
    weightCapacity: number;
    price: number;
    currency: Currency;
    dateOfManufacture: Date;
    mileage: number;
    color: string;
    region: string;
    city: string;
    validDays: number;
    cubature: number;
    engineCategoryType: EngineCategoryType;
    totalWeight: number;
    workingVolume: number;
    hoursOfOperation: number;
    numberOfBeds: number;
    toiletType: ToiletType;
    heatingType: HeatingType;
    airConditionType: AirConditionType;
    lengthSize: number;
    materialType: MaterialType;
    width: number;
    bicycleSize: number;
    numberOfGears: number;
    description: string;
}

export interface FileUpload {
    progress: number;
    inProgress: boolean
    data: File;
  }