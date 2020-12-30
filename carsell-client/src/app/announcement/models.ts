import { AbstractControl } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { ParamMap } from '@angular/router';
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
  name?: string;
  value?: string;
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
  id: number;
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
  validFrom: Date;
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

export class AnnouncementCreateModel implements AnnouncementCreate {
  id: number;
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
  validFrom: Date;
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

export interface AnnouncementSlide {
  price: number;
  currency: string;
  mileage: number;
  isSelected: boolean;
  make: string;
  model: string;
  imageUrl: string;
}

export class AnnouncementSlideModel implements AnnouncementSlide {
  constructor(
    public price: number,
    public currency: string,
    public mileage: number,
    public isSelected: boolean,
    public model: string,
    public make: string,
    public imageUrl: string) { }

}

export interface AnnouncementListItem {
  id: number;
  price: string;
  image: ImageFilePreview;
  title: string;
  options: Map<string, string>;
}

export class AnnouncementListItemModel implements AnnouncementListItem {
  id: number;
  price: string;
  image: ImageFilePreview;
  title: string;
  options: Map<string, string>;
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
  imageFiles: ImageFile[];
}

export interface AnnouncementSearch {
  mainCategoryId: string;
  make: string;
  model: string;
  engineType: string;
  conditionType: string;
  horsePowerMin: string;
  horsePowerMax: string;
  emissionStandartType: string;
  gearboxType: string;
  subCategoryId: string;
  coolingType: string;
  numberOfAxels: string;
  numberOfSeats: string;
  weightCapacityMin: string;
  weightCapacityMax: string;
  priceMin: string;
  priceMax: string;
  dateOfManufactureFrom: string;
  dateOfManufactureTo: string;
  mileageMax: string;
  color: string;
  region: string;
  city: string;
  cubatureMin: string;
  cubatureMax: string;
  engineCategoryType: string;
  totalWeightMin: string;
  workingVolumeMin: string;
  hoursOfOperationMax: string;
  numberOfBeds: string;
  toiletType: string;
  heatingType: string;
  airConditionType: string;
  lengthSizeMax: string;
  materialType: string;
  widthMax: string;
  bicycleSize: string;
  numberOfGears: string;
}

export class AnnouncementSearchModel implements AnnouncementSearch {
  mainCategoryId: string;
  make: string;
  model: string;
  engineType: string;
  conditionType: string;
  horsePowerMin: string;
  horsePowerMax: string;
  emissionStandartType: string;
  gearboxType: string;
  subCategoryId: string;
  coolingType: string;
  numberOfAxels: string;
  numberOfSeats: string;
  weightCapacityMin: string;
  weightCapacityMax: string;
  priceMin: string;
  priceMax: string;
  dateOfManufactureFrom: string;
  dateOfManufactureTo: string;
  mileageMax: string;
  color: string;
  region: string;
  city: string;
  cubatureMin: string;
  cubatureMax: string;
  engineCategoryType: string;
  totalWeightMin: string;
  workingVolumeMin: string;
  hoursOfOperationMax: string;
  numberOfBeds: string;
  toiletType: string;
  heatingType: string;
  airConditionType: string;
  lengthSizeMax: string;
  materialType: string;
  widthMax: string;
  bicycleSize: string;
  numberOfGears: string;

  public static toQueryParams(searchData: AnnouncementSearch) {
    return {
      mainCategoryId: searchData.mainCategoryId,
      make: searchData.make,
      model: searchData.model,
      engineType: searchData.engineType,
      conditionType: searchData.conditionType,
      horsePowerMin: searchData.horsePowerMin,
      horsePowerMax: searchData.horsePowerMax,
      emissionStandartType: searchData.emissionStandartType,
      gearboxType: searchData.gearboxType,
      subCategoryId: searchData.subCategoryId,
      coolingType: searchData.coolingType,
      numberOfAxels: searchData.numberOfAxels,
      numberOfSeats: searchData.numberOfSeats,
      weightCapacityMin: searchData.weightCapacityMin,
      weightCapacityMax: searchData.weightCapacityMax,
      priceMin: searchData.priceMin,
      priceMax: searchData.priceMax,
      dateOfManufactureFrom: searchData.dateOfManufactureFrom,
      dateOfManufactureTo: searchData.dateOfManufactureTo,
      mileageMax: searchData.mileageMax,
      color: searchData.color,
      region: searchData.region,
      city: searchData.city,
      cubatureMin: searchData.cubatureMin,
      cubatureMax: searchData.cubatureMax,
      engineCategoryType: searchData.engineCategoryType,
      totalWeightMin: searchData.totalWeightMin,
      workingVolumeMin: searchData.workingVolumeMin,
      hoursOfOperationMax: searchData.hoursOfOperationMax,
      numberOfBeds: searchData.numberOfBeds,
      toiletType: searchData.toiletType,
      heatingType: searchData.heatingType,
      airConditionType: searchData.airConditionType,
      lengthSizeMax: searchData.lengthSizeMax,
      materialType: searchData.materialType,
      widthMax: searchData.widthMax,
      bicycleSize: searchData.bicycleSize,
      numberOfGears: searchData.numberOfGears
    }
  }

  public static fromQueryParams(queryParams: ParamMap): AnnouncementSearch {
    const searchData = new AnnouncementSearchModel();
    searchData.mainCategoryId = queryParams.get('mainCategoryId');
    searchData.make = queryParams.get('make');
    searchData.model = queryParams.get('model');
    searchData.engineType = queryParams.get('engineType');
    searchData.conditionType = queryParams.get('conditionType');
    searchData.horsePowerMin = queryParams.get('horsePowerMin');
    searchData.horsePowerMax = queryParams.get('horsePowerMax');
    searchData.emissionStandartType = queryParams.get('emissionStandartType');
    searchData.gearboxType = queryParams.get('gearboxType');
    searchData.subCategoryId = queryParams.get('subCategoryId');
    searchData.coolingType = queryParams.get('coolingType');
    searchData.numberOfAxels = queryParams.get('numberOfAxels');
    searchData.numberOfSeats = queryParams.get('numberOfSeats');
    searchData.weightCapacityMin = queryParams.get('weightCapacityMin');
    searchData.weightCapacityMax = queryParams.get('weightCapacityMax');
    searchData.priceMin = queryParams.get('priceMin');
    searchData.priceMax = queryParams.get('priceMax');
    searchData.dateOfManufactureFrom = queryParams.get('dateOfManufactureFrom');
    searchData.dateOfManufactureTo = queryParams.get('dateOfManufactureTo');
    searchData.mileageMax = queryParams.get('mileageMax');
    searchData.color = queryParams.get('color');
    searchData.region = queryParams.get('region');
    searchData.city = queryParams.get('city');
    searchData.cubatureMin = queryParams.get('cubatureMin');
    searchData.cubatureMax = queryParams.get('cubatureMax');
    searchData.engineCategoryType = queryParams.get('engineCategoryType');
    searchData.totalWeightMin = queryParams.get('totalWeightMin');
    searchData.workingVolumeMin = queryParams.get('workingVolumeMin');
    searchData.hoursOfOperationMax = queryParams.get('hoursOfOperationMax');
    searchData.numberOfBeds = queryParams.get('numberOfBeds');
    searchData.toiletType = queryParams.get('toiletType');
    searchData.heatingType = queryParams.get('heatingType');
    searchData.airConditionType = queryParams.get('airConditionType');
    searchData.lengthSizeMax = queryParams.get('lengthSizeMax');
    searchData.materialType = queryParams.get('materialType');
    searchData.widthMax = queryParams.get('widthMax');
    searchData.bicycleSize = queryParams.get('bicycleSize');
    searchData.numberOfGears = queryParams.get('numberOfGears');
    return searchData;
  }

  toString() {
    let searchString = `
      ${this.mainCategoryId != null && this.mainCategoryId.trim() !== '' ? 'Основна категория: ' + this.mainCategoryId + ', ' : ''} 
      ${this.make != null && this.make.trim() !== '' ? 'Марка: ' + this.make + ', ' : ''} 
      ${this.model != null && this.model.trim() !== '' ? 'Модел: ' + this.model + ', ' : ''} 
      ${this.engineType != null && this.engineType.trim() !== '' ? 'Тип двигател: ' + this.engineType + ', ' : ''} 
      ${this.conditionType != null && this.conditionType.trim() !== '' ? 'Състояние: ' + this.conditionType + ', ' : ''} 
      ${this.horsePowerMin != null && this.horsePowerMin.trim() !== '' ? 'Мощност от: ' + this.horsePowerMin + ', ' : ''} 
      ${this.horsePowerMax != null && this.horsePowerMax.trim() !== '' ? 'Мощност до: ' + this.horsePowerMax + ', ' : ''} 
      ${this.emissionStandartType != null && this.emissionStandartType.trim() !== '' ? 'Евростандарт: ' + this.emissionStandartType + ', ' : ''} 
      ${this.gearboxType != null && this.gearboxType.trim() !== '' ? 'Скоростна кутия: ' + this.gearboxType + ', ' : ''} 
      ${this.subCategoryId != null && this.subCategoryId.trim() !== '' ? 'Категория: ' + this.subCategoryId + ', ' : ''} 
      ${this.coolingType != null && this.coolingType.trim() !== '' ? 'Вид охлаждане: ' + this.coolingType + ', ' : ''} 
      ${this.numberOfAxels != null && this.numberOfAxels.trim() !== '' ? 'Брой оси: ' + this.numberOfAxels + ', ' : ''} 
      ${this.numberOfSeats != null && this.numberOfSeats.trim() !== '' ? 'Брой места: ' + this.numberOfSeats + ', ' : ''} 
      ${this.weightCapacityMin != null && this.weightCapacityMin.trim() !== '' ? 'Товароносимост от: ' + this.weightCapacityMin + ', ' : ''} 
      ${this.weightCapacityMax != null && this.weightCapacityMax.trim() !== '' ? 'Товароносимост до: ' + this.weightCapacityMax + ', ' : ''} 
      ${this.priceMin != null && this.priceMin.trim() !== '' ? 'Цена от: ' + this.priceMin + ', ' : ''} 
      ${this.priceMax != null && this.priceMax.trim() !== '' ? 'Цена до: ' + this.priceMax + ', ' : ''} 
      ${this.dateOfManufactureFrom != null && this.dateOfManufactureFrom.trim() !== '' ? 'Година на производство от: ' + this.dateOfManufactureFrom + ', ' : ''} 
      ${this.dateOfManufactureTo != null && this.dateOfManufactureTo.trim() !== '' ? 'Година на производство до: ' + this.dateOfManufactureTo + ', ' : ''} 
      ${this.mileageMax != null && this.mileageMax.trim() !== '' ? 'Макс.пробег в км: ' + this.mileageMax + ', ' : ''} 
      ${this.color != null && this.color.trim() !== '' ? 'Цвят: ' + this.color + ', ' : ''} 
      ${this.region != null && this.region.trim() !== '' ? 'Регион: ' + this.region + ', ' : ''} 
      ${this.city != null && this.city.trim() !== '' ? 'Населено място: ' + this.city + ', ' : ''}
      ${this.cubatureMin != null && this.cubatureMin.trim() !== '' ? 'Кубатура от: ' + this.cubatureMin + ', ' : ''}
      ${this.cubatureMax != null && this.cubatureMax.trim() !== '' ? 'Кубатура до: ' + this.cubatureMax + ', ' : ''}
      ${this.engineCategoryType != null && this.engineCategoryType.trim() !== '' ? 'Вид двигател: ' + this.engineCategoryType + ', ' : ''} 
      ${this.totalWeightMin != null && this.totalWeightMin.trim() !== '' ? 'Мин.товароносимост: ' + this.totalWeightMin + ', ' : ''}
      ${this.workingVolumeMin != null && this.workingVolumeMin.trim() !== '' ? 'Мин.работен обем: ' + this.workingVolumeMin + ', ' : ''}
      ${this.hoursOfOperationMax != null && this.hoursOfOperationMax.trim() !== '' ? 'Мин.работни часа: ' + this.hoursOfOperationMax + ', ' : ''}
      ${this.numberOfBeds != null && this.numberOfBeds.trim() !== '' ? 'Брой легла: ' + this.numberOfBeds + ', ' : ''}
      ${this.toiletType != null && this.toiletType.trim() !== '' ? 'Тоалетна: ' + this.toiletType + ', ' : ''}
      ${this.heatingType != null && this.heatingType.trim() !== '' ? 'Отопление: ' + this.heatingType + ', ' : ''}
      ${this.airConditionType != null && this.airConditionType.trim() !== '' ? 'Климатик: ' + this.airConditionType + ', ' : ''}
      ${this.lengthSizeMax != null && this.lengthSizeMax.trim() !== '' ? 'Макс.дължина: ' + this.lengthSizeMax + ', ' : ''}
      ${this.materialType != null && this.materialType.trim() !== '' ? 'Материал: ' + this.materialType + ', ' : ''}
      ${this.widthMax != null && this.widthMax.trim() !== '' ? 'Макс.ширина: ' + this.widthMax + ', ' : ''}
      ${this.bicycleSize != null && this.bicycleSize.trim() !== '' ? 'Размер: ' + this.bicycleSize + ', ' : ''}
      ${this.numberOfGears != null && this.mainCategoryId.trim() !== '' ? 'Скорости: ' + this.numberOfGears + ', ' : ''}
    `
    searchString = searchString.trim();
    searchString = searchString.substr(0, searchString.length - 1);
    return searchString;
  }
}

export interface FileUpload {
  progress: number;
  inProgress: boolean;
  data: File;
}

export class FileUploadModel implements FileUpload {
  constructor(
    public progress: number,
    public inProgress: boolean,
    public data: File
  ) { }
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

export interface PreviewImageModalData {
  selectedImage: ImageFilePreview;
  images: ImageFilePreview[];
  announcement: AnnouncementPreview;
}

export class PreviewImageModalDataModel implements PreviewImageModalData {
  public selectedImage: ImageFilePreview;
  public images: ImageFilePreview[];
  public announcement: AnnouncementPreview;
  constructor(
    selectedImage: ImageFilePreview,
    images: ImageFilePreview[],
    announcement: AnnouncementPreview) {
    this.selectedImage = Object.assign({}, selectedImage);
    this.images = images.map(i => Object.assign({}, i));
    this.announcement = Object.assign({}, announcement);
  }
}

export class ImageFilePreviewModel implements ImageFilePreview {
  constructor(public id: number, public url: SafeUrl, public isSelected: boolean) { }
}


