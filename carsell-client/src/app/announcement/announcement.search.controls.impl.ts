import { FormControl } from '@angular/forms';
import { Control } from './enums';
import { AnnouncementControl, AnnouncementSearch } from './models';

export class AnnouncementSearchControlBuilder {
    private data: AnnouncementSearch | undefined = undefined;

    withSearchData(data: AnnouncementSearch) {
        this.data = data;
        return this;
    }

    public build(controlName: Control): AnnouncementControl {
        switch (controlName) {
            case Control.MAIN_CATEGORY_ID:
                return {
                    name: 'mainCategoryId',
                    control: new FormControl(this.data !== undefined &&
                        Number(this.data.mainCategoryId) !== 0 ? Number(this.data.mainCategoryId) : '')
                }
            case Control.MAKE:
                return {
                    name: 'make',
                    control: new FormControl(this.data !== undefined ? this.data.make : '')
                }
            case Control.MODEL:
                return {
                    name: 'model',
                    control: new FormControl(this.data !== undefined ? this.data.model : '')
                }
            case Control.ENGINE_TYPE:
                return {
                    name: 'engineType',
                    control: new FormControl(this.data !== undefined ? this.data.engineType : '')
                }
            case Control.CONDITION_TYPE:
                return {
                    name: 'conditionType',
                    control: new FormControl(this.data !== undefined ? this.data.conditionType : '')
                }
            case Control.HORSE_POWER_MIN:
                return {
                    name: 'horsePowerMin',
                    control: new FormControl(this.data !== undefined ? this.data.horsePowerMin : '')
                }
            case Control.HORSE_POWER_MAX:
                return {
                    name: 'horsePowerMax',
                    control: new FormControl(this.data !== undefined ? this.data.horsePowerMax : '')
                }
            case Control.EMISSION_STANDART_TYPE:
                return {
                    name: 'emissionStandartType',
                    control: new FormControl(this.data !== undefined ? this.data.emissionStandartType : '')
                }
            case Control.GEARBOX_TYPE:
                return {
                    name: 'gearboxType',
                    control: new FormControl(this.data !== undefined ? this.data.gearboxType : '')
                }
            case Control.SUB_CATEGORY_ID:
                return {
                    name: 'subCategoryId',
                    control: new FormControl(this.data !== undefined
                        && Number(this.data.subCategoryId) !== 0 ? Number(this.data.subCategoryId) : '')
                }
            case Control.COOLING_TYPE:
                return {
                    name: 'coolingType',
                    control: new FormControl(this.data !== undefined ? this.data.coolingType : '')
                }
            case Control.NUMBER_OF_AXELS:
                return {
                    name: 'numberOfAxels',
                    control: new FormControl(this.data !== undefined ? this.data.numberOfAxels : '')
                }
            case Control.NUMBER_OF_SEATS:
                return {
                    name: 'numberOfSeats',
                    control: new FormControl(this.data !== undefined ? this.data.numberOfSeats : '')
                }
            case Control.WEIGHT_CAPACITY_MIN:
                return {
                    name: 'weightCapacityMin',
                    control: new FormControl(this.data !== undefined ? this.data.weightCapacityMin : '')
                }
            case Control.WEIGHT_CAPACITY_MAX:
                return {
                    name: 'weightCapacityMax',
                    control: new FormControl(this.data !== undefined ? this.data.weightCapacityMax : '')
                }
            case Control.PRICE_MIN:
                return {
                    name: 'priceMin',
                    control: new FormControl(this.data !== undefined ? this.data.priceMin : '')
                }
            case Control.PRICE_MAX:
                return {
                    name: 'priceMax',
                    control: new FormControl(this.data !== undefined ? this.data.priceMax : '')
                }
            case Control.DATE_OF_MANUACTURE_FROM:
                return {
                    name: 'dateOfManufactureFrom',
                    control: new FormControl(this.data !== undefined ? this.data.dateOfManufactureFrom : '')
                }
            case Control.DATE_OF_MANUACTURE_TO:
                return {
                    name: 'dateOfManufactureTo',
                    control: new FormControl(this.data !== undefined ? this.data.dateOfManufactureTo : '')
                }
            case Control.MILEAGE_MAX:
                return {
                    name: 'mileageMax',
                    control: new FormControl(this.data !== undefined ? this.data.mileageMax : '')
                }
            case Control.COLOR:
                return {
                    name: 'color',
                    control: new FormControl(this.data !== undefined ? this.data.color : '')
                }
            case Control.REGION:
                return {
                    name: 'region',
                    control: new FormControl(this.data !== undefined ? this.data.region : '')
                }
            case Control.CITY:
                return {
                    name: 'city',
                    control: new FormControl(this.data !== undefined ? this.data.city : '')
                }
            case Control.CUBATURE_MIN:
                return {
                    name: 'cubatureMin',
                    control: new FormControl(this.data !== undefined ? this.data.cubatureMin : '')
                }
            case Control.CUBATURE_MAX:
                return {
                    name: 'cubatureMax',
                    control: new FormControl(this.data !== undefined ? this.data.cubatureMax : '')
                }
            case Control.ENGINE_CATEGORY_TYPE:
                return {
                    name: 'engineCategoryType',
                    control: new FormControl(this.data !== undefined ? this.data.engineCategoryType : '')
                }
            case Control.TOTAL_WEIGHT_MIN:
                return {
                    name: 'totalWeightMin',
                    control: new FormControl(this.data !== undefined ? this.data.totalWeightMin : '')
                }
            case Control.WORKING_VOLUME_MIN:
                return {
                    name: 'workingVolumeMin',
                    control: new FormControl(this.data !== undefined ? this.data.workingVolumeMin : '')
                }
            case Control.HOURS_OF_OPERATION_MAX:
                return {
                    name: 'hoursOfOperationMax',
                    control: new FormControl(this.data !== undefined ? this.data.hoursOfOperationMax : '')
                }
            case Control.NUMBER_OF_BEDS:
                return {
                    name: 'numberOfBeds',
                    control: new FormControl(this.data !== undefined ? this.data.numberOfBeds : '')
                }
            case Control.TOILET_TYPE:
                return {
                    name: 'toiletType',
                    control: new FormControl(this.data !== undefined ? this.data.toiletType : '')
                }
            case Control.HEATING_TYPE:
                return {
                    name: 'heatingType',
                    control: new FormControl(this.data !== undefined ? this.data.heatingType : '')
                }

            case Control.AIR_CONDITION_TYPE:
                return {
                    name: 'airConditionType',
                    control: new FormControl(this.data !== undefined ? this.data.airConditionType : '')
                }
            case Control.LENGTH_SIZE_MAX:
                return {
                    name: 'lengthSizeMax',
                    control: new FormControl(this.data !== undefined ? this.data.lengthSizeMax : '')
                }
            case Control.MATERIAL_TYPE:
                return {
                    name: 'materialType',
                    control: new FormControl(this.data !== undefined ? this.data.materialType : '')
                }
            case Control.WIDTH_MAX:
                return {
                    name: 'widthMax',
                    control: new FormControl(this.data !== undefined ? this.data.widthMax : '')
                }
            case Control.BICYCLE_SIZE:
                return {
                    name: 'bicycleSize',
                    control: new FormControl(this.data !== undefined ? this.data.bicycleSize : '')
                }
            case Control.NUMBER_OF_GEARS:
                return {
                    name: 'numberOfGears',
                    control: new FormControl(this.data !== undefined ? this.data.numberOfGears : '')
                }
        }
    }
}