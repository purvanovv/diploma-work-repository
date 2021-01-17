import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
    AirConditionType,
    ConditionType,
    CoolingType,
    Currency,
    EmissionStandartType,
    EngineCategoryType,
    EngineType, GearboxType, HeatingType, MaterialType, ToiletType
} from './enums';
import {
    AnnouncementCreate,
    AnnouncementCreateModel,
    AnnouncementListItem,
    AnnouncementListItemModel,
    AnnouncementPreview, FileUploadModel, ImageFile, ImageFilePreviewModel
} from './models';

export class AnnouncementModelConverter {
    constructor(private sanitizer: DomSanitizer) { }

    public convertImageFileToImageFilePreview(image: ImageFile) {
        const blob = this.base64ToBlob(image.encodedImage, image.dataType);
        return new ImageFilePreviewModel(image.id, this.blobToUrl(blob), false);
    }

    public convertImageFileToFileUpload(image: ImageFile) {
        const file = this.base64ToFile(image.encodedImage, image.dataType, image.name);
        return new FileUploadModel(0, false, file);
    }

    public converAnnouncementPreviewToAnnouncementListItem(source: AnnouncementPreview): AnnouncementListItem {
        const target = new AnnouncementListItemModel();
        target.id = source.id;
        target.image = this.convertImageFileToImageFilePreview(source.imageFiles[0]);
        target.price = source.price;
        target.currency = source.currency;
        target.title = `${source.make} ${source.model}`;
        target.options = this.buildOptions(source);
        return target;
    }

    public convertAnnouncementPreviewToAnnouncementCreate(source: AnnouncementPreview): AnnouncementCreate {
        const target = new AnnouncementCreateModel();
        target.id = source.id;
        target.mainCategoryId = source.mainCategory.id;
        target.make = source.make;
        target.model = source.model;
        target.engineType = this.getEnumByEnumValue(EngineType, source.engineType);
        target.conditionType = this.getEnumByEnumValue(ConditionType, source.conditionType);
        target.horsePower = source.horsePower;
        target.emissionStandartType = this.getEnumByEnumValue(EmissionStandartType, source.emissionStandartType);
        target.gearboxType = this.getEnumByEnumValue(GearboxType, source.gearboxType);
        target.subCategoryId = source.subCategory.id;
        target.coolingType = this.getEnumByEnumValue(CoolingType, source.coolingType);
        target.numberOfAxels = source.numberOfAxels;
        target.numberOfSeats = source.numberOfSeats;
        target.weightCapacity = source.weightCapacity;
        target.price = source.price;
        target.currency = this.getEnumByEnumValue(Currency, source.currency);
        target.dateOfManufacture = new Date(source.dateOfManufacture);
        target.mileage = source.mileage;
        target.color = source.color;
        target.region = source.region;
        target.city = source.city;
        target.validDays = source.validDays;
        target.cubature = source.cubature;
        target.engineCategoryType = this.getEnumByEnumValue(EngineCategoryType, source.engineCategoryType);
        target.validFrom = new Date(source.validFrom);
        target.totalWeight = source.totalWeight;
        target.workingVolume = source.workingVolume;
        target.hoursOfOperation = source.hoursOfOperation;
        target.numberOfBeds = source.numberOfBeds;
        target.toiletType = this.getEnumByEnumValue(ToiletType, source.toiletType);
        target.heatingType = this.getEnumByEnumValue(HeatingType, source.heatingType);
        target.airConditionType = this.getEnumByEnumValue(AirConditionType, source.airConditionType);
        target.lengthSize = source.lengthSize;
        target.materialType = this.getEnumByEnumValue(MaterialType, source.materialType);
        target.width = source.width;
        target.bicycleSize = source.bicycleSize;
        target.numberOfGears = source.numberOfGears;
        target.description = source.description;
        return target;
    }

    public getEnumKeyByEnumValue(myEnum: any, enumValue: number | string): string {
        const keys = Object.keys(myEnum).filter((x) => myEnum[x] === enumValue);
        return keys.length > 0 ? keys[0] : '';
    }

    public getEnumByEnumValue(myEnum: any, enumValue: number | string): any {
        const keys = Object.keys(myEnum).filter((x) => myEnum[x] === enumValue);
        return keys.length > 0 ? keys[0] : undefined;
    }


    private buildOptions(source: AnnouncementPreview): Map<string, string> {
        const options = new Map<string, string>();
        if (source.dateOfManufacture != null) { options.set('/assets/calendar.gif', source.dateOfManufacture) }
        if (source.cubature != null && source.cubature > 0) { options.set('/assets/cubature.gif', source.cubature.toString()) }
        if (source.gearboxType != null) { options.set('/assets/gear.gif', source.gearboxType) }
        if (source.mileage != null && source.mileage > 0) { options.set('/assets/mileage.gif', source.mileage.toString() + ' км') }
        if (source.color != null) { options.set('/assets/palette.gif', source.color) }
        if (source.horsePower != null && source.horsePower > 0) { options.set('/assets/power.gif', source.horsePower.toString() + ' к.с.') }
        if (source.numberOfBeds != null && source.numberOfBeds > 0) { options.set('/assets/bed_icon.gif', source.numberOfBeds.toString()) }
        if (source.lengthSize != null && source.lengthSize > 0) { options.set('/assets/ruler_icon.gif', source.lengthSize.toString()) }
        if (source.width != null && source.width > 0) { options.set('/assets/ruler_icon.gif', source.width.toString()) }
        return options;

    }

    private buildAnnouncemetListItemDescription(announcement: AnnouncementPreview): string {
        return `
        ${announcement.dateOfManufacture != null ? announcement.dateOfManufacture + ',' : ''}
        ${announcement.engineCategoryType != null ? announcement.engineCategoryType + ',' : ''}
        ${announcement.horsePower != null ? announcement.horsePower + 'к.с,' : ''} 
        ${announcement.emissionStandartType != null ? announcement.emissionStandartType + ',' : ''}
        ${announcement.gearboxType != null ? announcement.gearboxType + ',' : ''}
        ${announcement.subCategory != null ? announcement.subCategory.name + ',' : ''}
        ${announcement.mileage != null ? announcement.mileage + 'км,' : ''} 
        ${announcement.region != null ? 'Регион:' + announcement.region : ''}
        `;
    }

    private blobToUrl(blob: Blob): SafeUrl {
        const unsafeImageUrl = URL.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
    }

    private base64ToBlob(encodedString: string, dataType: string): Blob {
        const uintArray = this.encodedStringToUintArray(encodedString);
        return new Blob([uintArray], { type: dataType });
    }

    private base64ToFile(encodedString: string, dataType: string, fileName: string): File {
        const uintArray = this.encodedStringToUintArray(encodedString);
        return new File([uintArray], fileName, { type: dataType })
    }

    private encodedStringToUintArray(encodedString: string): Uint8Array {
        const byteCharacters = atob(encodedString);
        const uintArray = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            uintArray[i] = byteCharacters.charCodeAt(i);
        }
        return uintArray;
    }



}