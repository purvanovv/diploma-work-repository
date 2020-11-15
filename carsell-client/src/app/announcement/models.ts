import { AbstractControl } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import {
  EngineType,
  ConditionType,
  EmissionStandartType,
  GearboxType,
  CoolingType,
  Currency,
  EngineCategoryType,
  ToiletType,
  HeatingType,
  AirConditionType,
  MaterialType,
} from './enums';

export interface MainCategory {
  id: number;
  name: string;
  value: string;
}

export interface SubCategory {
  id: number;
  name: string;
  mainCategoryId: number;
}

export interface CategoryPair {
  mainCategory: MainCategory;
  subCategories: SubCategory[];
}

export interface Make {
  id: number;
  make: string;
  models: string[];
  mainCategoryId: number;
}

export interface AnnouncementCreate {
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

export interface AnnouncementPreview {
  id: number;
  mainCategory: MainCategory;
  make: string;
  model: string;
  engineType: string;
  conditionType: string;
  horsePower: number;
  emissionStandartType: string;
  gearboxType: string;
  subCategory: SubCategory;
  coolingType: string;
  numberOfAxels: number;
  numberOfSeats: number;
  weightCapacity: number;
  price: number;
  currency: string;
  dateOfManufacture: string;
  mileage: number;
  color: string;
  region: string;
  city: string;
  validDays: number;
  cubature: number;
  engineCategoryType: number;
  validFrom: string;
  totalWeight: number;
  workingVolume: number;
  hoursOfOperation: number;
  numberOfBeds: number;
  toiletType: string;
  heatingType: string;
  airConditionType: string;
  lengthSize: number;
  materialType: string;
  width: number;
  bicycleSize: number;
  numberOfGears: number;
  description: string;
  metaProps: MetaProps;
}

export interface FileUpload {
  progress: number;
  inProgress: boolean;
  data: File;
}

export interface AnnouncementControl {
  name: string;
  control: AbstractControl;
}

export interface MetaProps {
  createdOn: Date;
  createdBy: string;
  deleteFlag: boolean;
  modifiedBy: string;
  modifiedOn: Date;
  deleteBy: string;
}

export interface ImageFile {
  id: number;
  name: string;
  dataType: string;
  data: any;
  announcementId: number;
  encodedImage: string;
}

export interface ImageFilePreview {
  id: number;
  url: SafeUrl;
  isSelected: boolean;
}

export class ImageFilePreviewModel implements ImageFilePreview {
  constructor(public id: number, public url: SafeUrl, public isSelected: boolean) { }
}


