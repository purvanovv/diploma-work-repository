import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Control } from './enums';
import { AnnouncementControl, AnnouncementCreate } from './models';

export class AnnouncementControlBuilder {
  private announcementControl: AbstractControl;
  private announcement: AnnouncementCreate | undefined = undefined;

  public withAnnnouncement(announcement: AnnouncementCreate) {
    this.announcement = announcement;
    return this;
  }

  public build(controlName: Control): AnnouncementControl {
    switch (controlName) {
      case Control.MAIN_CATEGORY_ID:
        return {
          name: 'mainCategoryId',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.mainCategoryId : '',
            Validators.required
          ),
        };
      case Control.MAKE:
        return {
          name: 'make',
          control: new FormControl(this.announcement !== undefined ? this.announcement.make : '', Validators.required),
        };
      case Control.MODEL:
        return {
          name: 'model',
          control: new FormControl(this.announcement !== undefined ? this.announcement.model : '', Validators.required),
        };
      case Control.ENGINE_TYPE:
        return {
          name: 'engineType',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.engineType : '',
            Validators.required
          ),
        };
      case Control.CONDITION_TYPE:
        return {
          name: 'conditionType',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.conditionType : '',
            Validators.required
          ),
        };
      case Control.HORSE_POWER:
        return {
          name: 'horsePower',
          control: new FormControl(this.announcement !== undefined ? this.announcement.horsePower : '', [
            Validators.required,
            Validators.min(1),
          ]),
        };
      case Control.EMISSION_STANDART_TYPE:
        return {
          name: 'emissionStandartType',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.emissionStandartType : '',
            Validators.required
          ),
        };
      case Control.GEARBOX_TYPE:
        return {
          name: 'gearboxType',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.gearboxType : '',
            Validators.required
          ),
        };
      case Control.SUB_CATEGORY_ID:
        return {
          name: 'subCategoryId',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.subCategoryId : '',
            Validators.required
          ),
        };
      case Control.COOLING_TYPE:
        return {
          name: 'coolingType',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.coolingType : '',
            Validators.required
          ),
        };
      case Control.NUMBER_OF_AXELS:
        return {
          name: 'numberOfAxels',
          control: new FormControl(this.announcement !== undefined ? this.announcement.numberOfAxels : '', [
            Validators.required,
            Validators.min(1),
          ]),
        };
      case Control.NUMBER_OF_SEATS:
        return {
          name: 'numberOfSeats',
          control: new FormControl(this.announcement !== undefined ? this.announcement.numberOfSeats : '', [
            Validators.required,
            Validators.min(1),
          ]),
        };
      case Control.WEIGHT_CAPACITY:
        return {
          name: 'weightCapacity',
          control: new FormControl(this.announcement !== undefined ? this.announcement.weightCapacity : '', [
            Validators.required,
            Validators.min(0),
          ]),
        };
      case Control.PRICE:
        return {
          name: 'price',
          control: new FormControl(this.announcement !== undefined ? this.announcement.price : '', [
            Validators.required,
            Validators.min(0),
          ]),
        };
      case Control.CURRENCY:
        return {
          name: 'currency',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.currency : '',
            Validators.required
          ),
        };
      case Control.DATE_OF_MANUACTURE:
        return {
          name: 'dateOfManufacture',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.dateOfManufacture : '',
            Validators.required
          ),
        };
      case Control.MILEAGE:
        return {
          name: 'mileage',
          control: new FormControl(this.announcement !== undefined ? this.announcement.mileage : '', [
            Validators.required,
            Validators.min(0),
          ]),
        };
      case Control.COLOR:
        return {
          name: 'color',
          control: new FormControl(this.announcement !== undefined ? this.announcement.color : '', Validators.required),
        };
      case Control.REGION:
        return {
          name: 'region',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.region : '',
            Validators.required
          ),
        };
      case Control.CITY:
        return {
          name: 'city',
          control: new FormControl(this.announcement !== undefined ? this.announcement.city : '', Validators.required),
        };
      case Control.VALID_DAYS:
        return {
          name: 'validDays',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.validDays : '',
            Validators.required
          ),
        };
      case Control.CUBATURE:
        return {
          name: 'cubature',
          control: new FormControl(this.announcement !== undefined ? this.announcement.cubature : '', [
            Validators.required,
            Validators.min(1),
          ]),
        };
      case Control.ENGINE_CATEGORY_TYPE:
        return {
          name: 'engineCategoryType',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.engineCategoryType : '',
            Validators.required
          ),
        };
      case Control.TOTAL_WEIGHT:
        return {
          name: 'totalWeight',
          control: new FormControl(this.announcement !== undefined ? this.announcement.totalWeight : '', [
            Validators.required,
            Validators.min(1),
          ]),
        };
      case Control.WORKING_VOLUME:
        return {
          name: 'workingVolume',
          control: new FormControl(this.announcement !== undefined ? this.announcement.workingVolume : '', [
            Validators.required,
            Validators.min(1),
          ]),
        };
      case Control.HOURS_OF_OPERATION:
        return {
          name: 'hoursOfOperation',
          control: new FormControl(this.announcement !== undefined ? this.announcement.hoursOfOperation : '', [
            Validators.required,
            Validators.min(0),
          ]),
        };
      case Control.NUMBER_OF_BEDS:
        return {
          name: 'numberOfBeds',
          control: new FormControl(this.announcement !== undefined ? this.announcement.numberOfBeds : '', [
            Validators.required,
            Validators.min(0),
          ]),
        };
      case Control.TOILET_TYPE:
        return {
          name: 'toiletType',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.toiletType : '',
            Validators.required
          ),
        };
      case Control.HEATING_TYPE:
        return {
          name: 'heatingType',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.heatingType : '',
            Validators.required
          ),
        };
      case Control.AIR_CONDITION_TYPE:
        return {
          name: 'airConditionType',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.airConditionType : '',
            Validators.required
          ),
        };
      case Control.LENGTH_SIZE:
        return {
          name: 'lengthSize',
          control: new FormControl(this.announcement !== undefined ? this.announcement.lengthSize : '', [
            Validators.required,
            Validators.min(1),
          ]),
        };
      case Control.MATERIAL_TYPE:
        return {
          name: 'materialType',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.materialType : '',
            Validators.required
          ),
        };
      case Control.WIDTH:
        return {
          name: 'width',
          control: new FormControl(this.announcement !== undefined ? this.announcement.width : '', [
            Validators.required,
            Validators.min(1),
          ]),
        };
      case Control.BICYCLE_SIZE:
        return {
          name: 'bicycleSize',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.bicycleSize : '',
            Validators.required
          ),
        };
      case Control.NUMBER_OF_GEARS:
        return {
          name: 'numberOfGears',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.numberOfGears : '',
            Validators.required
          ),
        };
      case Control.DESCRIPTION:
        return {
          name: 'description',
          control: new FormControl(
            this.announcement !== undefined ? this.announcement.description : '',
            Validators.required
          ),
        };
    }
  }
}
