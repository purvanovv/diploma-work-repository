import { R3TargetBinder } from '@angular/compiler';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AnnouncementListItem, AnnouncementListItemModel, AnnouncementPreview, ImageFile, ImageFilePreviewModel } from './models';

export class ImageFileUtility {

    constructor(private sanitizer: DomSanitizer) { }


}

export class AnnouncementModelConverter {
    constructor(private sanitizer: DomSanitizer) { }

    public convertImageFileToImageFilePreview(image: ImageFile) {
        const blob = this.base64ToBlob(image.encodedImage, image.dataType);
        return new ImageFilePreviewModel(image.id, this.blobToUrl(blob), false);
    }

    public converAnnouncementPreviewToAnnouncementListItem(source: AnnouncementPreview): AnnouncementListItem {
        const target = new AnnouncementListItemModel();
        target.id = source.id;
        target.image = this.convertImageFileToImageFilePreview(source.imageFiles[0]);
        target.description = this.buildAnnouncemetListItemDescription(source);
        target.price = `${source.price} ${source.currency}`;
        target.title = `${source.make} ${source.model}`;
        return target;
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
        const byteCharacters = atob(encodedString);
        const uintArray = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            uintArray[i] = byteCharacters.charCodeAt(i);
        }
        return new Blob([uintArray], { type: dataType });
    }


}